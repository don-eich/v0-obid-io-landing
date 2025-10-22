"use client"

export function RiskScoreGauge({ score = 8.4 }: { score?: number }) {
  const percentage = (score / 10) * 100
  const rotation = (percentage / 100) * 180 - 90

  return (
    <div className="relative w-full max-w-xs mx-auto">
      <svg viewBox="0 0 200 120" className="w-full">
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="20"
          className="text-gray-700"
          strokeLinecap="round"
        />
        <path
          d="M 20 100 A 80 80 0 0 1 100 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="20"
          className="text-red-500"
          strokeLinecap="round"
        />
        <path
          d="M 100 20 A 80 80 0 0 1 140 35"
          fill="none"
          stroke="currentColor"
          strokeWidth="20"
          className="text-amber-500"
          strokeLinecap="round"
        />
        <path
          d="M 140 35 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="20"
          className="text-green-500"
          strokeLinecap="round"
        />
        <g transform={`rotate(${rotation} 100 100)`}>
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="35"
            stroke="currentColor"
            strokeWidth="3"
            className="text-white"
            strokeLinecap="round"
          />
          <circle cx="100" cy="100" r="8" fill="currentColor" className="text-white" />
        </g>
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-end pb-4">
        <div className="text-4xl font-bold text-white mb-2">{score}</div>
        <div className="text-sm text-gray-400">Score de Riesgo</div>
      </div>

      <div className="flex justify-between text-xs text-gray-400 mt-2">
        <span>Alto Riesgo</span>
        <span>Bajo Riesgo</span>
      </div>
    </div>
  )
}
