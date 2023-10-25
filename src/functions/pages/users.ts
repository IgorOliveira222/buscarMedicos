export const bgUsersAll = (locationNow: string, url: string) => {
  if (locationNow === url) {
    return {
      bg1: 'bg-white',
      bg2: 'bg-green-4',
      textColor: 'text-white',
      font: 'font-bold'
    }
  }
}

// Se a url em tempo real for a mesma que locationNow , muda de cor font e text
