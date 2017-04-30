import React, { Component} from 'react';

class StockNews extends Component {
  renderNews(newsData) {
    console.log(newsData)
    return newsData.response.docs.map(doc => {
      return (
        <div className="col-xs-12 col-lg-6">
          <div className="card">
            <div className="card-block">
              <h5 className="card-title">{doc.headline.main}</h5>
              <p className="card-text">{doc.lead_paragraph}</p>
              <div className="card-footer text-muted">
                <a href={doc.web_url} target="_blank" className="btn btn-secondary btn-card">Read more!</a>
              </div>
            </div>
          </div>
        </div>
      )
    });
  }



  render(){
    return (
      <div>
        {this.props.news.map(this.renderNews)}
      </div>
    );
  }
}

export default StockNews;
