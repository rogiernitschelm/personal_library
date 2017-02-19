/* REACT AND REDUX */

import React, { Component } from 'react';
import StocksSearchBar from './stocks_search_bar/stocks_search_bar';
import StockCard from './stock_card/stock_card';
import StockNews from './stock_news/stock_news';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Stocks extends Component {
  render(){

    const { Name, High, Low, Change, ChangePercent, Volume } = this.props.stock;
    const NEWS = this.props.stockNews

    const CARD_TITLE_1 = "Javascript and ES6";
    const CARD_TEXT_1 = "Things like " +
    "scope and the keyword 'this' are familiar to me. I write ES6 with babel," +
    "and know arrow-functions and array-methods. That said, " +
    "I still have enough to learn!";

    const CARD_TITLE_2 = "React.js, Redux and ES6";
    const CARD_TEXT_2 = "I am investing alot of effort in improving my React-skills. " +
    "When new frameworks and languages arise, I am more than happy to adapt!";

    const CARD_TITLE_3 = "Not a designer";
    const CARD_TEXT_3 = "I like writing code to make things " +
    "functional. If you need only looks, then there are better alternatives out there."

    return (
      <div className="container">

        <div className="row">
          <div className="app-summary col-xs-12 col-sm-10 col-md-6">
            <h3 className="text-with-margin">Quick US stock Search</h3>

            <p>A quick stock search for finding American stocks. I used an American API
            as there are no well-documented Dutch stock-market API's.</p>

            <p className="hidden-sm-down">The biggest obstacle was the fact that the API doesn't allow for directly
            searching a stock. Instead one first has to grab the symbol (a short name) of the stock.
            Like AAPL for Apple. In order to avoid having to first manually find a symbol, I decided to make two subsequent
            AJAX-calls using JavaScript promises.</p>

          </div>
          <div className="col-xs-12 col-md-6">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Stock: { Name }</li>
              <li className="list-group-item">Highest price: $ { High }</li>
              <li className="list-group-item">Lowest price: $ { Low }</li>
              <li className="list-group-item">Change: $ { Change === undefined ? 0 : (Math.round(Change * 100) / 100)}</li>
              <li className="list-group-item">Volume: { Volume }</li>
            </ul>
          </div>
          <div className="col-xs-12">
            <StocksSearchBar />
          </div>
        </div>

        <div className="row">
          <StockCard title={CARD_TITLE_1} text={CARD_TEXT_1}/>
          <StockCard title={CARD_TITLE_2} text={CARD_TEXT_2}/>
          <StockCard title={CARD_TITLE_3} text={CARD_TEXT_3}/>
        </div> <br /><br /><br /><br />

        <h4 className="text-xs-center">{ Name === undefined? "Interesting articles will be loaded here:" : "Read more about the stocks of your interest:"}</h4>
        <hr />

        <div className="row">
          <StockNews news={NEWS}/>
        </div>

      </div>
    );
  }
}

function mapStateToProps({ stock, stockNews }) {
  return { stock, stockNews };
}

export default connect(mapStateToProps)(Stocks);
