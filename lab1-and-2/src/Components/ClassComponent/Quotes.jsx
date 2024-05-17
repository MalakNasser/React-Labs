import React, { Component } from "react";
import axios from "axios";
import styles from "../../Styles/Quotes.module.css";

export default class Quotes extends Component {
  state = {
    quotes: [],
    min: 0,
    max: 5,
  };

  componentDidMount() {
    this.fetchQuotes();
  }

  fetchQuotes = async () => {
    axios
      .get("https://dummyjson.com/quotes")
      .then((res) => {
        this.setState({ quotes: res.data.quotes });
      })
      .catch((err) => console.log(err));
  };

  nextQuotes = () => {
    if (this.state.max < this.state.quotes.length) {
      this.setState({ min: this.state.min + 5 });
      this.setState({ max: this.state.max + 5 });
    } else {
      this.setState({ min: 0 });
      this.setState({ max: 5 });
    }
  };

  prevQuotes = () => {
    if (this.state.min > 0) {
      this.setState({ min: this.state.min - 5 });
      this.setState({ max: this.state.max - 5 });
    } else {
      this.setState({ min: this.state.quotes.length - 5 });
      this.setState({ max: this.state.quotes.length });
    }
  };

  render() {
    const { quotes, min, max } = this.state;
    return (
      <div className="mb-4">
        <h2 className={styles.header}>Quotes Component</h2>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.buttonContainer}>
              <button className={styles.prevButton} onClick={this.prevQuotes}>
                Previous
              </button>
            </div>
            <div className={styles.tableContainer}>
              <table className={`table ${styles.table}`}>
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Quote</th>
                    <th scope="col">Author</th>
                  </tr>
                </thead>
                <tbody>
                  {quotes.slice(min, max).map((q) => (
                    <tr key={q.id}>
                      <td>{q.id}</td>
                      <td>{q.quote}</td>
                      <td>{q.author}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.nextButton} onClick={this.nextQuotes}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
