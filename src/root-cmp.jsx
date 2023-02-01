import React from 'react'
import { AppFooter } from './cmps/app-footer'
import { DescriptionPage } from './cmps/description-page'
import { TeamPreview } from './cmps/team-preview'
import { HomePage } from './pages/home-page'

export function App() {
  return (
    <div>
      <HomePage />
      <DescriptionPage/>
      <TeamPreview />
      <AppFooter />
    </div>
  )
}
