import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import Button from '../../Components/Button/Button'
import './ExpenseClaim.scss'

function ExpenseClaim() {
  const userData = useSelector((state) => state.auth.user);
  const [claimData,setClaimData]=useState([])
    const [edit,setEdit]=useState(true)
    const [save,setSave]=useState(false)
    const [selectedExpense, setSelectedExpense] = useState('');
    const [totalAmt,setTotalAmt]=useState(0)
    const [newExpense, setNewExpense] = useState({
        EmpId: userData.empId,
        formId: userData.formId,
        expenseName: '',
        expType: '',
        expAmt: '',
        expDate: '',
        colleagueName:'',
        Remarks: '',
        Bill:null
    });
    const addExpense=(e)=>{
        setEdit(true)
        setSave(false)
        setNewExpense({
            empId: userData.empId,
            formId: userData.formId,
            expenseName: '',
            expType: '',
            expAmt: '',
            expDate: '',
            colleagueName:'',
            Remarks: '',
            Bill:null
        })
    };
    const saveExpense = (e) => {
        e.preventDefault()
        setEdit(false)
        setSave(true)
        if(!newExpense.expenseName){
            console.log("inside save")
            setTotalAmt(parseInt(totalAmt)+parseInt(newExpense.expAmt))
            const expenseNo=claimData.length+1;
            const newExpenseWithNo = {...newExpense,expenseName: expenseNo,};
            setNewExpense(newExpenseWithNo)
            console.log(newExpense)
            setClaimData([...claimData, newExpenseWithNo]);
            console.log(claimData)
            setSelectedExpense(expenseNo)
        }
        else{
            setTotalAmt(parseInt(totalAmt)+parseInt(newExpense.expAmt))
            console.log(newExpense)
            const updatedClaimData = claimData.map((expense) =>
                expense.expenseName == selectedExpense ? newExpense : expense
            );
            console.log(updatedClaimData)
            setClaimData(updatedClaimData);
            
            }
    };
    const handleEdit=()=>{
        setTotalAmt(parseInt(totalAmt)-parseInt(newExpense.expAmt))
        setEdit(true)
        setSave(false)
    }
    const sendDataToBackend=()=>{

    }
    const handleDraft=()=>{

    }
    const handleExpenseChangeDropDown = (e) => {
        console.log("inside drop down")
        const selectedExpenseName = e.target.value;
        console.log(selectedExpenseName)
        setSelectedExpense(selectedExpenseName);
        console.log(claimData)
        const selectedExpenseData = claimData.find(
            (expense) => expense.expenseName == selectedExpenseName
        );
        console.log(selectedExpenseData)
        if (selectedExpenseData) {
            console.log("inside if")
            setNewExpense({
                ...newExpense,
                expenseName: selectedExpenseData.expenseName,
                expType: selectedExpenseData.expType,
                expAmt: selectedExpenseData.expAmt,
                expDate: selectedExpenseData.expDate,
                colleagueName:selectedExpenseData.colleagueName,
                Remarks: selectedExpenseData.Remarks,
                Bill: selectedExpenseData.Bill,
            });
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewExpense({ ...newExpense, [name]: value });
};

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setNewExpense({ ...newExpense, Bill: file });
    };
    return (
        <div className='ClaimContainer'>
            {/* <div className='expenseTitle'>
                    Expense Details
                </div> */}
                {/* <div className='formName'>
                    <label>FORM NAME*: </label>
                    <input type="text" className='claimInput' name='formName' value={userData.FormName} required/>
                </div> */}
                <div className='titleDetail'>
                    <div className='Title1'>User Details</div>
                    <div className='divDetail'>
                    <div className='Detail'>
                        <div className='rows'>
                            <div className='claimDetails'>
                                <label className='formTitle'>Employee Id *</label>
                                <input type="text" className='claimInput' name='empId' value={userData.EmpId} required/>
                            </div>
                            <div className='claimDetails'>
                                <label className='formTitle'>Name *</label>
                                <input type="text" className='claimInput' name='Name' value={userData.FName} required/>
                            </div>
                            <div className='claimDetails'>
                                <label className='formTitle'>Date *</label>
                                <input type="text" className='claimInput' name='Date' value={userData.Date} required/>
                            </div>
                        </div>
                        <div className='rows'>
                            {userData.role=='Employee'?<div className='claimDetails'>
                                <label className='formTitle'>Manager Name *</label>
                                <input type="text" className='claimInput' name='managerName' value={userData.managerName} required/>
                            </div>:null}
                            <div className='claimDetails'>
                                <label className='formTitle'>Project Name *</label>
                                <input type="text" className='claimInput' name='projectName' value={userData.projectName} required/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='titleDetail'>
                    <div className='claimTitle'>
                        <div className='Title1'>Expense {newExpense.expenseName}</div>
                        <div className='select_edit'>
                            <div>
                                <select className='claimInput1' value={selectedExpense} onChange={handleExpenseChangeDropDown}>
                                    <option value=''>Select Expense</option>
                                    {claimData.map((expense, index) => (
                                        <option key={index} value={expense.expenseName}>
                                            Expense {expense.expenseName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                {!edit&&<Button handleFunc={handleEdit} buttonContent='Edit'/>}
                            </div>
                        </div>
                    </div>
                    <div className='divDetail'>
                        <form className='Detail' onSubmit={saveExpense}>
                            <div className='rows'>
                                <div className='claimDetails'>
                                    <label className='formTitle'>Expense Type *</label>
                                    <input type="text" className='claimInput' name='expType' onChange={handleInputChange} value={newExpense.expType} disabled={!edit} required/>
                                </div>
                                <div className='claimDetails'>
                                    <label className='formTitle'>Expense Amount *</label>
                                    <input type="number" className='claimInput' name='expAmt' onChange={handleInputChange} value={newExpense.expAmt} disabled={!edit} required/>
                                </div>
                                <div className='claimDetails'>
                                    <label className='formTitle'>Expense Date *</label>
                                    <input type="date" className='claimInput' name='expDate' onChange={handleInputChange} value={newExpense.expDate} disabled={!edit} required/>
                                </div>
                            </div>
                            <div className='rows'>
                                <div className='claimDetails'>
                                    <label className='formTitle'>Colleague Name</label>
                                    <input type="text" className='claimInput' name='colleagueName' onChange={handleInputChange} disabled={!edit} value={newExpense.colleagueName}/>
                                </div>
                                <div className='claimDetails'>
                                    <label className='formTitle'>Remarks</label>
                                    <input type="text" className='claimInput' name='Remarks' onChange={handleInputChange} disabled={!edit} value={newExpense.Remarks}/>
                                </div>
                                <div className='claimDetails'>
                                    <label className='formTitle'>Add Bill</label>
                                    <input type="file" className='claimInput2' onChange={handleFileChange} name='Bill'/>
                                </div>
                            </div>
                            <div className='ClaimButton'>
                                {edit&&<button className='button1' type="submit">Save</button>}
                                {save&&<Button handleFunc={addExpense} buttonContent='Add Expense'/>}
                            </div>
                        </form>
                    </div>
                </div>
                <div className='total-send'>
                    <div className='totalAmt'>
                        Total Amount:{totalAmt}
                    </div>
                    <div className='Send-draft'>
                        <Button handleFunc={handleDraft} buttonContent='Draft'/>
                        <Button handleFunc={sendDataToBackend} buttonContent='Send'/>
                    </div>
                </div>
        </div>
    )
}

export default ExpenseClaim