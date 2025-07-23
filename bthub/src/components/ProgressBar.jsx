import React, { useState, useEffect } from 'react'

const ProgressBar = ({ progress = 0, isVisible = true, color = '#CFA386' }) => {
  const [currentProgress, setCurrentProgress] = useState(0)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setCurrentProgress(progress)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [progress, isVisible])

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="h-1 bg-gray-200">
        <div
          className="h-1 transition-all duration-500 ease-out"
          style={{
            width: `${currentProgress}%`,
            backgroundColor: color
          }}
        />
      </div>
    </div>
  )
}

export default ProgressBar 