
//import { useScreenSize } from "@/hooks/useScreenSize";
//import { faker } from "@faker-js/faker";
import { 
  ReactNode, 
  createContext, 
  useContext,
  useEffect,
  useState, 
  //useEffect, 
  //useState 
} from "react"

import { useAuthStore } from "../stores/authStore";
import useMultiStepsForm from "@/hooks/useMultiStepsForm";
import { Step1 } from "../components/register/Step1";
import { Step2 } from "../components/register/Step2";
import { isValidEmail } from "../utils/helper";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

const RegisterContext = createContext<any>({});

export const useRegister = () => {
  const {
    formInput,
    setFormInput,
    handSubmit,
    errors,
    handInputChange,
    loading,
    step,
    next,
    back,
  } = useContext(RegisterContext);

  return {
    formInput,
    setFormInput,
    handSubmit,
    errors,
    handInputChange,
    loading,
    step,
    next,
    back,
  };
};

export const RegisterProvider = ({
  children,
}: {
  children: ReactNode,
}) => {
  const [
    searchParams, 
    //setSearchParams
  ] = useSearchParams();
  const rfValue = searchParams.get('rf');

  const [formInput, setFormInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    referenceCode: rfValue ? rfValue : '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    contact: '',
    language: '',
    telegramId: '',
    whatsappId: '',
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({
    firstName: [],
    lastName: [],
    email: [],
    referenceCode: [],
    phoneNumber: [],
    password: [],
    confirmPassword: [],
    contact: [],
    telegramId: [],
    whatsappId: [],
    language: [],
    acceptTerms: [],
  });

  const navigate = useNavigate();
  const {
    registerAct,
    loading,
  } = useAuthStore();

  //multi-steps---------------------
  const {
    step,
    next,
    back,
  } = useMultiStepsForm([
    {
      id: 0,
      name: 'step1',
      node: <Step1/>,
    },
    {
      id: 1,
      name: 'step2',
      node: <Step2/>,
    },
  ]);

  const validate = () => {
    const errors:any = {
      firstName: [],
      lastName: [],
      email: [],
      referenceCode: [],
      phoneNumber: [],
      password: [],
      confirmPassword: [],
      contact: [],
      telegramId: [],
      whatsappId: [],
      language: [],
      acceptTerms: [],
    };

    if (!formInput.firstName) 
      errors.firstName.push('Enter a First Name');

    if (!formInput.lastName) 
      errors.lastName.push('Enter a Last Name');

    if (!formInput.email) 
      errors.email.push('Enter an Email');
    else if (!isValidEmail(formInput.email)) {
      errors.email.push('Enter a valid email');
    }

    if (!formInput.phoneNumber) 
      errors.phoneNumber.push('Enter a Phone number');

    if (!formInput.password) 
      errors.password.push('Enter a password');
    else if(formInput.password.length < 6) {
      errors.password.push('Password has to be at least 6 characters');
    }

    if (!formInput.confirmPassword) 
      errors.confirmPassword.push('Repeat your password');
    else if(formInput.confirmPassword.length < 6) {
      errors.confirmPassword.push('Password has to be at least 6 characters');
    }
    else if (formInput.password !== formInput.confirmPassword) {
      errors.confirmPassword.push('Passwords do not match');
    }

    if (!formInput.contact) 
      errors.contact.push('Pick a contact method');
    else if (formInput.contact && formInput.contact === 'telegram') {
      if (!formInput.telegramId) {
        errors.telegramId.push('Enter your telegram id');
      }
    } 
    else if (formInput.contact && formInput.contact === 'whatsapp') {
      if (!formInput.whatsappId) {
        errors.whatsappId.push('Enter your whatsapp id');
      }
    } 

    if (!formInput.language) 
      errors.language.push('Pick a contact method');

    if (!formInput.acceptTerms) 
      errors.acceptTerms.push('Please accept our terms');

    setErrors(errors);
  }

  const handInputChange = (e: any) => {
    const value = e.target?.value;
    const name = e.target?.name;
    //const checked = e.target?.checked;
    
    switch(name) {
      case 'firstName':
        setFormInput((c:any) => ({...c, firstName: value}));
        break;
      case 'lastName':
        setFormInput((c:any) => ({...c, lastName: value}));
        break;
      case 'email':
        setFormInput((c:any) => ({...c, email: value}));
        break;
      case 'referenceCode':
        setFormInput((c:any) => ({...c, referenceCode: value}));
        break;
      case 'phoneNumber':
        setFormInput((c:any) => ({...c, phoneNumber: value}));
        break;
      case 'password':
        setFormInput((c:any) => ({...c, password: value}));
        break;
      case 'confirmPassword':
        setFormInput((c:any) => ({...c, confirmPassword: value}));
        break;
      case 'contact':
        setFormInput((c:any) => ({...c, contact: value}));
        break;
      case 'telegramId':
        setFormInput((c:any) => ({...c, telegramId: value}));
        break;
      case 'whatsappId':
        setFormInput((c:any) => ({...c, whatsappId: value}));
        break;
      case 'language':
        setFormInput((c:any) => ({...c, language: value}));
        break;
      case 'acceptTerms':
        setFormInput((c:any) => ({...c, acceptTerms: e.target?.checked}));
        break;
      default:
        break;
    }
  }

  const handSubmit = (e:any) => {
    e.preventDefault();

    validate();

    //first step
    if (
      !errors.firstName.length &&
      !errors.lastName.length &&
      !errors.email.length &&
      !errors.password.length &&
      !errors.confirmPassword.length 
    ) {
      next();
    }

    // do not go for submit on step1
    if (step.name === 'step1') return

    if (
      errors.firstName.length ||
      errors.lastName.length ||
      errors.email.length ||
      errors.password.length ||
      errors.confirmPassword.length ||
      errors.phoneNumber.length ||
      errors.contact.length ||
      (formInput.contact === 'telegram' && errors.telegramId.length) ||
      (formInput.contact === 'whatsapp' && errors.whatsappId.length) ||
      errors.acceptTerms.length ||
      errors.language.length
      
    ) return;
    
    console.log(formInput);
    registerAct(
      formInput,
      () => navigate('/verify-email')
    );
  }

  useEffect(() => {
    validate();
  }, [formInput]);

  const context = {
    formInput,
    setFormInput,
    handSubmit,
    errors,
    handInputChange,
    loading,
    step,
    next,
    back,
  };

  return (
    <>
    <RegisterContext.Provider value={context}>
      {children}
    </RegisterContext.Provider>
    </>
  )
}