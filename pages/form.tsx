import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import BasicTextFields from "../components/Textfield";
import BasicSelect from "../components/Select";
import TextArea from "../components/TextArea";
import BasicButton from "../components/Button";
import { updateData } from "../state/actions/action";
import ButtonAppBar from "../components/AppBar";
import CircularIndeterminate from "../components/progress";

interface IData {
  fieldName: string;
  type: string;
  value: string;
  options?: Array<string>;
}

export default function Form() {
  const data = useSelector((state: any) => state?.fields?.data);
  const updatedData = useSelector((state: any) => state?.fields?.updatedData);
  const dispatch = useDispatch();
  const updateEndPoint = "https://ulventech-react-exam.netlify.app/api/form";
  const [update, setUpdate] = useState(data.data);
  const [submitted, setSubmitted] = useState<boolean>(false);
  let arr = data?.data;
  const changeHandler = (name: any, value: any) => {
    const index = arr?.findIndex((object: any) => {
      return object.fieldName == name;
    });
    if (index !== -1) {
      arr[index].value = value;
    }
  };

  const submitHandler = async (event: any) => {
    event.preventDefault();
    var newObj: any = {};
    for (var i = 0; i < arr?.length; i++) {
      newObj[arr[i].fieldName] = arr[i].value;
    }
    let updated = await axios.post(updateEndPoint, newObj);
    dispatch(updateData(updated));
    setSubmitted(true);
  };

  return (
    <div className="main">
      <ButtonAppBar />
      <div className="container">
        <h4>Dynamic Form</h4>
        {!data || data.length < 1 ? (
          <CircularIndeterminate />
        ) : (
          <>
            {data?.data?.map((value: IData, index: any) => {
              if (
                value.type == "text" ||
                value.type == "email" ||
                value.type == "number"
              ) {
                return (
                  <>
                    <BasicTextFields
                      value={value.value}
                      fieldName={value.fieldName}
                      change={changeHandler}
                      type={value.type}
                      height="330px"
                    >
                      {value.value}
                    </BasicTextFields>
                  </>
                );
              } else if (value.type == "multiline") {
                return (
                  <>
                    <TextArea
                      value={value.value}
                      change={changeHandler}
                      fieldName={value.fieldName}
                    >
                      {value.value}
                    </TextArea>
                  </>
                );
              } else {
                return (
                  <>
                    <BasicSelect
                      options={value.options}
                      fieldName={value.fieldName}
                      value={value.value}
                      change={changeHandler}
                    />
                  </>
                );
              }
            })}
            <div className="btn">
              <BasicButton submitHandler={submitHandler} />
            </div>
          </>
        )}
      </div>
      {submitted && updatedData && (
        <>
          <div className="container">
            <>
              <h4>Response</h4>

              <p> {JSON.stringify(updatedData)} </p>
            </>
          </div>
        </>
      )}
    </div>
  );
}
