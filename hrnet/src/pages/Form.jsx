import 
    React, 
{   useState, 
    useEffect 
} from "react";
import { Link } from "react-router-dom";
import store from "../redux/store";

import departments from "../utils/departments";
import states from "../utils/states";

import { employeeCreatedAction } from "../redux/employeeCreated";
import { formDataAction } from "../redux/formData";

//import ModalDisplay from "../components/ModalDisplay";
import Header from "../components/Header";
import Loader from "./Loader";
import Footer from "../components/Footer";

import numberOneDot from "../assets/numberOneDot.png";
import numberTwoDot from "../assets/numberTwoDot.png";

/**
 * @name Form
 * @description create the form to generate the employee record
 * @returns {JSX.Element}
 */
export default function Form ()
{
    
    useEffect(() => 
    {
        // Fetch the department list options
        const getDepartmentOption = document.getElementById("department");
        departments.forEach((department) => 
        {
            const option = document.createElement("option");
            option.text = department.name;
            getDepartmentOption.appendChild(option);
        });

        // Fetch the states list options
        const getStateOption = document.getElementById("state");
        states.forEach((state) => 
        {
            const option = document.createElement("option");
            option.text = state.name;
            option.value = state.value;
            getStateOption.appendChild(option);
        });      

    }, []);

    // Set the initial state
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        birth: "",
        startDate: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        department: "",
    });

    // Get the information from each fields
    const onChange = (el) => 
    {
        el.persist();
        const { name, value } = el.target
        setFormData ((state) => 
        ({
        ...state, [name]: value,
        }))
    }

    // To send the information to redux
    const onSubmit = (el) => 
    {
    el.preventDefault();
    store.dispatch(formDataAction(formData));
    store.dispatch(employeeCreatedAction(true));
    };

    return (
        <div>
            <Loader />
            <Header />
            
            <div className="form">

                <h2>Create Employee</h2>

                <div className="formContainer">
                    <form 
                        action="#" 
                        id="create-employee" 
                        onSubmit={onSubmit}
                    >
                        <label htmlFor="first-name">
                            <span>First Name</span>
                            <input 
                                autoComplete="off"
                                type="text" 
                                id="first-name" 
                                name="firstName" 
                                onChange={onChange} 
                                value={formData.firstName} 
                                required
                            />
                        </label>

                        <label htmlFor="last-name">
                            <span>Last Name</span>
                            <input 
                                autoComplete="off"
                                type="text" 
                                id="last-name" 
                                name="lastName" 
                                onChange={onChange} 
                                value={formData.lastName} 
                                required
                            />
                        </label>

                        <label htmlFor="date-of-birth">
                            <span>Date of Birth</span>
                            <input 
                                autoComplete="off"
                                type="date" 
                                id="date-of-birth" 
                                name="birth" 
                                onChange={onChange} 
                                value={formData.birth} 
                                required
                            />
                        </label>

                        <label htmlFor="start-date">
                            <span>Start Date</span>
                            <input 
                                autoComplete="off"
                                type="date" 
                                id="start-date" 
                                name="startDate" 
                                onChange={onChange} 
                                value={formData.startDate} 
                                required 
                            />
                        </label>

                        <fieldset className="fieldset">
                            <legend>Address</legend>

                            <label htmlFor="street">
                                <span>Street</span>
                                <input 
                                    autoComplete="on"
                                    id="street" 
                                    type="text" 
                                    name="street" 
                                    onChange={onChange} 
                                    value={formData.street} 
                                    required 
                                />
                            </label>

                            <label htmlFor="city">
                                <span>City</span>
                                <input 
                                    autoComplete="on"
                                    id="city" 
                                    type="text" 
                                    name="city" 
                                    onChange={onChange} 
                                    value={formData.city} 
                                    required 
                                />
                            </label>

                            <label htmlFor="state">
                                <span>State</span>
                                <select 
                                    name="state" 
                                    id="state" 
                                    onChange={onChange} 
                                    value={formData.state} 
                                    required
                                >
                                    <option>Choose a State</option>
                                </select>
                            </label>

                            <label htmlFor="zip-code">
                                <span>Zip Code</span>
                                <input 
                                    id="zip-code" 
                                    type="number" 
                                    name="zipCode" 
                                    onChange={onChange} 
                                    value={formData.zipCode} 
                                    required
                                />
                            </label>
                        </fieldset>

                        <label htmlFor="department">
                            <span>Department</span>
                            <select 
                                name="department" 
                                id="department" 
                                onChange={onChange} 
                                value={formData.department} 
                                required
                            >
                                <option>Choose a department</option>
                            </select>
                        </label>
                        <button 
                            type="submit" 
                            className="submitButton"
                        >
                            Save
                        </button>
                    </form>
                </div>
            </div>
        <Footer />
    </div>
    )
};