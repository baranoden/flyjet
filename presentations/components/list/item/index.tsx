import React from "react";
import styles from "./Item.module.scss";
import * as IoIcons from "react-icons/io";
import Button from "react-bootstrap/Button";

const Item = (props: any) => {
  return (
    <div className={styles.boardingPass}>
      <header>
        <label className={styles.logo}>FLYJET</label>
        <div className={styles.flight}>
          <small>flight</small>
          <strong>{props.data.flightNumber}</strong>
        </div>
      </header>
      <section className={styles.cities}>
        <div className={styles.city}>
          <small>{props.data.from.country}</small>
          <strong>{props.data.from.airportCode}</strong>
        </div>
        <div className={styles.city}>
          <small>{props.data.to.country}</small>
          <strong>{props.data.to.airportCode}</strong>
        </div>
        <svg className={styles.airplane}>
          <IoIcons.IoIosAirplane size={25} />
        </svg>
      </section>
      <section className={styles.infos}>
        <div className={styles.places}>
          <div className={styles.box}>
            <small>Terminal</small>
            <strong>
              <em>{props.data.terminal}</em>
            </strong>
          </div>
          <div className={styles.box}>
            <small>Gate</small>
            <strong>
              <em>{props.data.gate}</em>
            </strong>
          </div>
          <div className={styles.box}>
            <small>Seat</small>
            <strong>{props.data.seat}</strong>
          </div>
          <div className={styles.box}>
            <small>Class</small>
            <strong>{props.data.class}</strong>
          </div>
        </div>
        <div className={styles.times}>
          <div className={styles.box}>
            <small>Boarding</small>
            <strong>{props.data.boardingTime}</strong>
          </div>
          <div className={styles.box}>
            <small>Departure</small>
            <strong>{props.data.departureTime}</strong>
          </div>
          <div className={styles.box}>
            <small>Duration</small>
            <strong>{props.data.duration}</strong>
          </div>
          <div className={styles.box}>
            <small>Arrival</small>
            <strong>{props.data.arrivalTime}</strong>
          </div>
        </div>
      </section>
      <section className={styles.strap}>
        <div className={styles.box}>
          <div className={styles.miniInfos}>
            <small>Baggage</small>
            <strong>{props.data.baggage}</strong>
          </div>
          <div className={styles.miniInfos}>
            <small>Date</small>
            <strong>{props.data.date}</strong>
          </div>
        </div>
        <div className={styles.buttonBox}>
          <Button>Book Now</Button>
        </div>
      </section>
    </div>
  );
};

export default Item;
