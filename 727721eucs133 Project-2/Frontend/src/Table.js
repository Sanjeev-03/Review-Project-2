import React, { Component } from "react";
import axios from "axios";
import "./Neww.css";
import "./Table.css";

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer_id: "",
            customerName: "",
            branchName: "",
            mobile_number: "",
            mail_id: "",
            customer_address: "",
            fuelData: [], // Array to store fuel data fetched from the server
        };
    }

    componentDidMount() {
        // Fetch fuel data from server when component mounts
        axios.get("http://localhost:9991/show").then((response) => {
            this.setState({ fuelData: response.data });
        });
    }   

    handlecustomer_idChange = (event) => {
        this.setState({ customer_id: event.target.value });
    };
    handlecustomerName = (event) => {
        this.setState({ customerName: event.target.value });
    };
    handlebranchName = (event) => {
        this.setState({ branchName: event.target.value });
    };
    handlemobile_number = (event) => {
        this.setState({ mobile_number: event.target.value });
    };
    handlemail_id = (event) => {
        this.setState({ mail_id: event.target.value });
    };
    handlecustomer_address = (event) => {
        this.setState({ customer_address: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            customer_id: this.state.customer_id,
            customerName: this.state.customerName,
            branchName: this.state.branchName,
            mobile_number: this.state.mobile_number,
            mail_id: this.state.mail_id,
            customer_address: this.state.customer_address,
        };
        console.log(data);
        axios.post("http://localhost:9991/add", data).then((response) => {
            // Add new fuel data to the state and clear the form
            this.setState({
                fuelData: [...this.state.fuelData, response.data],
                customer_id: "",                
                customerName: "",
                branchName: "",
                mobile_number: "",
                mail_id: "",
                customer_address: "",
            });
        });
    };

    handleDelete = (customer_id) => {
        // Send DELETE request to remove fuel data with the given ID
        axios.delete(`http://localhost:9991/delete/${customer_id}`)
        window.location.reload().then((response) => {
            // Update the state to remove the deleted fuel data
            const updatedFuelData = this.state.fuelData.filter(
                (Bank) => Bank.customer_id !== customer_id
            );
            this.setState({ fuelData: updatedFuelData });
        });
    };

    handleEdit = (data) => {
        this.setState({
            customer_id: data.customer_id,
            customerName: data.customerName,
            branchName: data.branchName,
            mobile_number: data.mobile_number,
            mail_id: data.mail_id,
            customer_address:data.customer_address,
            isEdit: true,
        });
        // console.log(this.state.id);
    };

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        });
    };


    handleUpdate = (event) => {
        event.preventDefault();
        const data = {
            customer_id: this.state.customer_id,
            customerName: this.state.customerName,
            branchName: this.state.branchName,
            mobile_number: this.state.mobile_number,
            mail_id:this.state.mail_id,
            customer_address:this.state.customer_address,
        };
        const customer_id = this.state.customer_id;
        axios
            .put(`http://localhost:9991/update/${customer_id}`, data)
            window.location.reload().then((res) => {
                console.log(res.data);
                this.setState({
                    customer_id: "",
                    customerName: "",
                    branchName: "",
                    mobile_number: "",
                    mail_id:"",
                    customer_address:"",
                });
                this.props.history.push("/");
            })
            .catch((err) => console.log(err));
    };






    render() {
        return (

            <div>
                <form onSubmit={this.handleSubmit} className="fuel">
                    <label className="login-label">customer_id</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.customer_id}
                        onChange={this.handlecustomer_idChange}
                    />
                    <br /><br />
                    <label className="login-label">customerName</label>
                    <input
                        className="fuel"
                        type="text"     
                        value={this.state.customerName}
                        onChange={this.handlecustomerName}
                    />
                    <br /><br />
                    <label className="login-label">branchName</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.branchName}
                        onChange={this.handlebranchName}
                    />
                    <br /><br />

                    <label className="login-label">mobile_number</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.mobile_number}
                        onChange={this.handlemobile_number}
                    />
                    <br /><br />

                    <label className="login-label">mail_id</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.mail_id}
                        onChange={this.handlemail_id}
                    />
                    <br /><br />

                    <label className="login-label">customer_address</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.customer_address}
                        onChange={this.handlecustomer_address}
                    />
                    <br /><br />

                    <button className="submitt" type="submit" id="asd">
                        Submit
                    </button>
                    <br /><br />
                </form>

                <table className="output">
                    <thead>
                        <tr>
                            <th>customer_id</th>
                            <th>customerName</th>
                            <th>branchName</th>
                            <th>mobile_number</th>
                            <th>mail_id</th>
                            <th>customer_address</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.fuelData.map((data) => (
                            <tr key={data.customer_id}>
                                <td>{data.customer_id}</td>
                                <td>{data.customerName}</td>
                                <td>{data.branchName}</td>
                                <td>{data.mobile_number}</td>
                                <td>{data.mail_id}</td>
                                <td>{data.customer_address}</td>
                                <td>
                                    <button onClick={() => this.handleEdit(data)}>Edit</button>
                                </td>

                                <td>
                                    <button
                                        onClick={() => this.handleDelete(data.customer_id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br></br><br></br><br></br><br></br>
                <form onSubmit={this.handleUpdate}>
                    {/* <input type="hidden" name="id" value={this.state.id} /> */}
                    <label>customer_id</label>
                    <input
                        type="number"
                        className="onee"
                        name="customer_id"
                        value={this.state.customer_id}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>customerName</label>
                    <input
                        type="text"
                        className="onee"
                        name="customerName"
                        value={this.state.customerName}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>branchName</label>
                    <input
                        type="text"
                        className="onee"
                        name="branchName"
                        value={this.state.branchName}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>mobile_number</label>
                    <input
                        type="number"
                        className="onee"
                        name="mobile_number"
                        value={this.state.mobile_number}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>mail_id</label>
                    <input
                        type="text"
                        className="onee"
                        name="mail_id"
                        value={this.state.mail_id}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>customer_address</label>
                    <input
                        type="text"
                        className="onee"
                        name="customer_address"
                        value={this.state.customer_address}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <button type="submit">Save</button>
                    <button onClick={this.handleCancel}>Cancel</button>
                </form>        </div>

        );
    }
}
export default Table;