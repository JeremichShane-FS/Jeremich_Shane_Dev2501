import { Component } from "react";
import AdCard from "../components/cards/AdCard";
import { mockAds } from "../data/mockAds";

export default class AdSection extends Component {
  render() {
    return (
      <section className="ad-section">
        <ul className="ad-section__list">
          {mockAds.map(ad => (
            <li key={ad.id} className="ad-section__list-item">
              <AdCard ad={ad} />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
