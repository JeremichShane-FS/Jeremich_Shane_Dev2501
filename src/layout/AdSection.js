import { Component } from "react";
import AdCard from "../components/cards/AdCard";
import { mockAds } from "../data/mockAds";

export default class AdSection extends Component {
  render() {
    return (
      <section style={styles.section}>
        <ul>
          {mockAds.map(ad => (
            <li style={styles.li} key={ad.id}>
              <AdCard ad={ad} />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

const styles = {
  section: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))",
  },
  li: {
    listStyleType: "none",
  },
};
