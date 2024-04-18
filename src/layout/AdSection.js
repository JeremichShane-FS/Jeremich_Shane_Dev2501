import { Component } from "react";
import AdCard from "../components/cards/AdCard";
import { mockAds } from "../data/mockAds";

export default class AdSection extends Component {
  render() {
    return (
      <section className="ad-section">
        <ul>
          {mockAds.map(ad => (
            <li className="ad-section__list-item" key={ad.id}>
              <AdCard ad={ad} />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
