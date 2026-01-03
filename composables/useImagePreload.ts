/**
 * Composable для preloading изображений проектов
 * Использует Intersection Observer для оптимальной загрузки
 */
export const useImagePreload = () => {
  const preloadedImages = new Set<string>()
  
  /**
   * Preload изображения через создание Image объекта
   */
  const preloadImage = (url: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (preloadedImages.has(url)) {
        resolve()
        return
      }
      
      const img = new Image()
      img.onload = () => {
        preloadedImages.add(url)
        resolve()
      }
      img.onerror = reject
      img.src = url
    })
  }
  
  /**
   * Preload массива изображений с приоритетом
   */
  const preloadImages = async (urls: string[], priority: 'high' | 'low' = 'low') => {
    if (priority === 'high') {
      // Загружаем сразу для высокого приоритета
      await Promise.all(urls.map(url => preloadImage(url)))
    } else {
      // Загружаем по одному для низкого приоритета
      for (const url of urls) {
        await preloadImage(url)
      }
    }
  }
  
  /**
   * Preload изображений при скролле (Intersection Observer)
   */
  const observeAndPreload = (element: HTMLElement, imageUrls: string[]) => {
    if (!process.client) return
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            preloadImages(imageUrls, 'low')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '200px' // Начинаем загрузку за 200px до появления
      }
    )
    
    observer.observe(element)
    
    return () => observer.disconnect()
  }
  
  return {
    preloadImage,
    preloadImages,
    observeAndPreload,
    preloadedImages
  }
}