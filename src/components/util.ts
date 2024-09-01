export const getDataFromForm = (target: EventTarget & HTMLFormElement) => {
  const formData = new FormData(target);
  const data: { [key: string]: FormDataEntryValue } = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  return data;
};
