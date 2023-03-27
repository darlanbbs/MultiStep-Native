import React, {
  createContext,
  useReducer,
  ReactNode,
  useContext,
  useState,
} from "react";

interface IProps {
  children: ReactNode;
}

type Action = {
  type: formActions;
  payload: any;
};

type contextType = {
  state: Datas;
  setFormData: (props: any) => void;
  formData: any;
  dispatch: (action: Action) => void;
};
type Datas = {
  currentStep: number;
  name: string;
  email: string;
  number: number;
  plan: "Arcade" | "Advanced" | "Pro";
  type: "Monthly" | "Yearly";
  price: string;
};

const formContext = createContext<contextType | undefined>(undefined);

const initialData: Datas = {
  currentStep: 0,
  name: "",
  email: "",
  number: 0,
  price: "$12/mo",
  plan: "Advanced",
  type: "Monthly",
};

export enum formActions {
  setCurrentStep,
  setName,
  setEmail,
  setNumber,
  setPrice,
  setType,
  setPlan,
}

const formReducer = (state: Datas, action: Action) => {
  switch (action.type) {
    case formActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case formActions.setType:
      return { ...state, type: action.payload };
    case formActions.setName:
      return { ...state, name: action.payload };
    case formActions.setEmail:
      return { ...state, email: action.payload };
    case formActions.setNumber:
      return { ...state, number: action.payload };
    case formActions.setPlan:
      return { ...state, plan: action.payload };
    case formActions.setPrice:
      return { ...state, price: action.payload };

    default:
      return state;
  }
};

export const FormProvider = ({ children }: IProps) => {
  const [formData, setFormData] = useState(undefined);

  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch, setFormData, formData };

  return <formContext.Provider value={value}>{children}</formContext.Provider>;
};

export const useForm = () => {
  const context = useContext(formContext);

  if (!context) {
    throw new Error("UseForm deve ser usado em um formProvider");
  }

  return context;
};
