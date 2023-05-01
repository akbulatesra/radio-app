import { RadioBrowserApi, StationSearchType } from 'radio-browser-api';

export const getCountriesFunction = async (setFunction) => {
  const api = new RadioBrowserApi('My Radio App');
  const response = await api.getCountries();
  const temp = response?.filter((item) => item.stationcount > 10);
  temp?.map((item) =>
    setFunction((prev) => [...prev, { value: item?.name, label: item?.name }])
  );
};

export const getTagsFunction = async (setFunction) => {
  const api = new RadioBrowserApi('My Radio App');
  const response = await api.getTags();
  const temp = response?.filter((item) => item?.stationcount > 100);
  temp?.map((item) =>
    setFunction((prev) => [...prev, { value: item?.name, label: item?.name }])
  );
};

export const getLanguagesFunction = async (setFunction) => {
  const api = new RadioBrowserApi('My Radio App');
  const response = await api.getLanguages();
  const temp = response?.filter((item) => item?.stationcount > 100);
  temp?.map((item) =>
    setFunction((prev) => [...prev, { value: item?.name, label: item?.name }])
  );
};

export const getRadioStationsByCountryFunction = async (
  setFunction,
  country
) => {
  const api = new RadioBrowserApi('My Radio App');
  const response = await api.getStationsBy(
    StationSearchType.byCountry,
    country
  );
  const temp = response.filter((item) => response.indexOf(item.url) === -1);
  setFunction(temp);
};

export const getRadioStationsByTagFunction = async (setFunction, tag) => {
  const api = new RadioBrowserApi('My Radio App');
  const response = await api.getStationsBy(StationSearchType.byTag, tag);
  const temp = response.filter((item) => response.indexOf(item.url) === -1);
  setFunction(temp);
};

export const getRadioStationByLanguageFunction = async (
  setFunction,
  language
) => {
  const api = new RadioBrowserApi('My Radio App');
  const response = await api.getStationsBy(
    StationSearchType.byLanguage,
    language
  );
  const temp = response.filter((item) => response.indexOf(item.url) === -1);
  setFunction(temp);
};
