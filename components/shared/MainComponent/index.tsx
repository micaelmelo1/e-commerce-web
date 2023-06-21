import React from "react"
import Header from '../Header/StorefrontHeader'


const MainComponent: React.FC = ({children}) => {
  return ( 
    <div class="d-flex flex-column stick-footer-wrapper">
      <Header />
      <div className="container flex-fill">
        {children}
      </div>
    </div>
  )
}

export default MainComponent;