import React, { useState } from "react";
import styles from "./Search.module.scss";
import CustomSelect from "../../customComponents/customSelect/CustomSelect";
import CustomDate from "presentations/customComponents/customDate/CustomDate";
import Button from "react-bootstrap/Button";
import { useAppDispatch, useAppSelector } from "store";
import { useFormik } from "formik";
import { toast } from "react-toastify";
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
    validationSchema: Yup.object().shape({
      from: Yup.string().required("From field is required"),
      to: Yup.string().required("To field is required"),
      startDate: Yup.string().required("Departure field is required"),
      endDate: oneWay
        ? ""
        : (Yup.string().required("This field is required") as any),
      passenger: Yup.number()
        .required("This field is required")
        .test(
          "min-value",
          "Value must be higher or equal to 1",
          (value) => value >= 1
        ),
    }),
    onSubmit: (values) => {
      const payload = {
        from: values.from ? values.from : "all",
        to: values.to ? values.to : "all",
        passenger: values.passenger >= 1 ? values.passenger : "all",
        startDate: values.startDate
          ? moment(values.startDate).format("MM-DD-YYYY")
          : "all",
        endDate: values.endDate
          ? moment(values.endDate).format("MM-DD-YYYY")
          : "all",
      };
      dispatch(fetchFlights(payload));
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.formInputs}>
        <CustomSelect
          placeholder={"From..."}
          options={reforgeFlight}
          className={
            formik.errors.from && formik.touched.from ? "red-border" : null
          }
          value={reforgeFlight.find((el: any) => el.id === formik.values.from)}
          onChange={(e: any) => {
            console.log(e);
            formik.setFieldValue("from", e.id);
          }}
        />
        <CustomSelect
          placeholder={"To..."}
          options={reforgeFlight}
          className={
            formik.errors.to && formik.touched.to ? "red-border" : null
          }
          value={reforgeFlight.find((el) => el.id === formik.values.to)}
          onChange={(e: any) => {
            formik.setFieldValue("to", e.id);
          }}
        />
        <CustomDate
          selected={formik.values.startDate}
          placeholder={"Departure..."}
          className={
            formik.errors.startDate && formik.touched.startDate
              ? "red-border"
              : null
          }
          onChange={(e: any) => {
            formik.setFieldValue("startDate", e);
          }}
        />
        {!oneWay ? (
          <CustomDate
            selected={formik.values.endDate}
            placeholder={"Return..."}
            className={
              formik.errors.endDate && formik.touched.endDate
                ? "red-border"
                : null
            }
            onChange={(e: any) => {
              formik.setFieldValue("endDate", e);
            }}
          />
        ) : null}
      </div>
      <div className={styles.guests}>
        <label
          style={{
            borderBottom:
              formik.errors.passenger && formik.touched.passenger
                ? "1px solid red"
                : "none",
          }}
        >
          Passengers
        </label>
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
          className={styles.resetBtn}
          onClick={() => dispatch(fetchFlights("fetchall" as any))}
        >
          Reset Filters
        </Button>
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
