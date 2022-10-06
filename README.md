# CMPE 255 - HW1 - Sarinder Virk

This is a revision of https://github.com/tonyxu-io/react-bigquery-app by Tony XU <yihan.xu@gmail.com>


## A Simple BigQuery App using React and Express

-----

This app is based on the Google BigQuery app tutorial [Create A Simple Application With the API](https://cloud.google.com/bigquery/create-simple-app-api#bigquery-simple-app-download-nodejs) and using [Google Cloud Public Dataset - Stack Overflow](https://cloud.google.com/bigquery/public-data/stackoverflow)

## Demo

![React-Bigquery-Demo](https://user-images.githubusercontent.com/4393945/194223157-db0fa638-9514-460b-9aeb-d17454f073a5.png)


Supported queries:

- Natality correlation: Ave_Age_of_Mother to Maternal_Morbidity_YN
```
SELECT
  CORR(a.area_deprivation_index_percent,
    b.Ave_Age_of_Mother) corr,
    a.year,
    a.state
FROM
  `bigquery-public-data.broadstreet_adi.area_deprivation_index_by_county` a
JOIN
  `bigquery-public-data.sdoh_cdc_wonder_natality.county_natality_by_maternal_morbidity` b
ON
  b.County_of_Residence_FIPS = a.county_fips_code
WHERE
  b.Maternal_Morbidity_YN = 1
group by
  a.year, a.state
```

- Others? TBD

## Install

- Clone this repository
- `npm install`

## Usage

### Include Google Cloud Credential on Environment Variable

Follow instructions on Google Cloud Platform to get application credential [application default credentials](https://cloud.google.com/docs/authentication/getting-started)

You can also create a `.env` file and set as below:

```javascript
GOOGLE_APPLICATION_CREDENTIALS = 'PATH/To/Your/JSON/Key/File'
```

### Start Express Server

node-bigquery:

```
npm start
```

### Start React Client

node-bigquery/client:

```
npm start
```
