import React from 'react'
import PriceComparisonChart from './components/PriceComparisonChart'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          房價分析系統
        </h1>
        <PriceComparisonChart />
      </div>
    </div>
  )
}

export default App