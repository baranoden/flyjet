import React, { useState } from "react";
import styles from "./Search.module.scss";
import CustomSelect from "../../customComponents/customSelect/CustomSelect";
import CustomDate from "presentations/customComponents/customDate/CustomDate";
import Button from "react-bootstrap/Button";
import { useAppDispatch, useAppSelector } from "store";
import { useFormik } from "formik";

import * as Yup from "yup";
import { fetchFlights } from "store/slices/airports";
import moment from "moment";

const Search = () => {
  const dispatch = useAppDispatch();
  const [oneWay, setOneWay] = useState<boolean>(true);
  const airports = useAppSelector((state) => state.airports.airports);
  const reforgeFlight = airports.map((item: any, key: Number) => ({
    id: item.code,
    name: item.city + "/" + item.code,
  }));
  const formik = useFormik({
    initialValues: {
      from: "",
      to: "",
      startDate: "",
      endDate: "",
      passenger: 0,
    },
    // validationSchema: Yup.object().shape({
    //   from: Yup.string().required("This field is required"),
    //   to: Yup.string().required("This field is required"),
    //   startDate: Yup.string().required("This field is required"),
    //   endDate: Yup.string().required("This field is required"),
    //   passenger: Yup.string().required("This field is required"),
    // }),
    onSubmit: (values) => {
      dispatch(
        fetchFlights({
          ...values,
          startDate: moment(values.startDate).format("MM-DD-YYYY"),
          endDate: values.endDate
            ? moment(values.endDate).format("MM-DD-YYYY")
            : "",
        })
      );
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.formInputs}>
        <CustomSelect
          placeholder={"From..."}
          options={reforgeFlight}
          value={reforgeFlight.find((el) => el.id === formik.values.from)}
          onChange={(e) => {
            console.log(e);
            formik.setFieldValue("from", e.id);
          }}
        />
        <CustomSelect
          placeholder={"To..."}
          options={reforgeFlight}
          value={reforgeFlight.find((el) => el.id === formik.values.to)}
          onChange={(e) => {
            formik.setFieldValue("to", e.id);
          }}
        />
        <CustomDate
          selected={formik.values.startDate}
          placeholder={"Departure..."}
          onChange={(e) => {
            formik.setFieldValue("startDate", e);
          }}
        />
        {!oneWay ? (
          <CustomDate
            selected={formik.values.endDate}
            placeholder={"Return..."}
            onChange={(e) => {
              formik.setFieldValue("endDate", e);
            }}
          />
        ) : null}
      </div>
      <div className={styles.guests}>
        <label>Passengers</label>
        <div className={styles.counter}>
          <Button
            className={styles.incrementers}
            onClick={() =>
              formik.setFieldValue(
                "passenger",
                Number(formik.values.passenger) + 1
              )
            }
          >
            +
          </Button>
          <span>{formik.values.passenger}</span>
          <Button
            className={styles.incrementers}
            onClick={() => {
              formik.values.passenger !== 0
                ? formik.setFieldValue(
                    "passenger",
                    Number(formik.values.passenger) - 1
                  )
                : null;
            }}
          >
            -
          </Button>
        </div>
        <label>One way</label>
        <div className={styles.return}>
          <input
            type="checkbox"
            id="checkbox"
            checked={oneWay}
            className={styles.checkbox}
            onClick={() => {
              setOneWay(!oneWay);
              formik.setFieldValue("endDate", "");
            }}
          />
        </div>
        <Button
          className={styles.searchBtn}
          onClick={() => formik.handleSubmit()}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default Search;
