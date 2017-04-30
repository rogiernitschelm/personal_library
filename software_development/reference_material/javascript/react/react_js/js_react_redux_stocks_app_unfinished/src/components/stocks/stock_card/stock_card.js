import React from 'react';

const StockCard = (props) => {

  const { title, text } = props

  return (
    <div className="col-xs-12 col-lg-4">
      <div className="card">
        <div className="card-block">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <div class="card-footer text-muted">
            <a href="#" className="btn btn-secondary btn-card">Useless button</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StockCard
