import React, { useState } from 'react';

const NewBillForm = props => {

    const [enteredUtility, setEnteredUtility] = useState();
    const [enteredAccountNumber, setEnteredAccountNumber] = useState();
    const [enteredMeterNumber, setEnteredMeterNumber] = useState();
    const [enteredRateSchedule, setEnteredRateSchedule] = useState();
    const [enteredStartDate, setEnteredStartDate] = useState();
    const [enteredEndDate, setEnteredEndDate] = useState();
    const [enteredBillableTotalkWh, setEnteredBillableTotalkWh] = useState();
    const [enteredBillableDemandkW, setEnteredBillableDemandkW] = useState();
    const [enteredMeasuredTotalkWh, setEnteredMeasuredTotalkWh] = useState();
    const [enteredMeasuredDemandkW, setEnteredMeasuredDemandkW] = useState();
    const [enteredTotalCost, setEnteredTotalCost] = useState();

    const utilityChangeHandler = event => { setEnteredUtility(event.target.value)};
    const accountNumberChangeHandler = (event) => { setEnteredAccountNumber(event.target.value)};
    const rateScheduleChangeHandler = (event) => {setEnteredRateSchedule(event.target.value)};
    const meterNumberChangeHandler = (event) => {setEnteredMeterNumber(event.target.value)};
    const startDateChangeHandler = (event) => {setEnteredStartDate(event.target.value)};
    const endDateChangeHandler = (event) => {setEnteredEndDate(event.target.value)};
    const billableTotalkWhChangeHandler = (event) => {setEnteredBillableTotalkWh(event.target.value)};
    const billableDemandkWChangeHandler = (event) => {setEnteredBillableDemandkW(event.target.value)};
    const measuredTotalkWhChangeHandler = (event) => {setEnteredMeasuredTotalkWh(event.target.value)};
    const measuredDemandkWChangeHandler = (event) => {setEnteredMeasuredDemandkW(event.target.value)};
    const totalCostChangeHandler = (event) => {setEnteredTotalCost(event.target.value)};


    const submitHandler = event => {
        event.preventDefault();

        const billData = [
            {utility: enteredUtility,
            accountnumber: enteredAccountNumber,
            rateSchedule: enteredRateSchedule,
            metereNumber: enteredMeterNumber,
            startDate: new Date(enteredStartDate),
            endDate: new Date(enteredEndDate),
            billableTotalkWh: enteredBillableTotalkWh,
            billableDemandkW: enteredBillableDemandkW,
            measuredTotalkWh: enteredMeasuredTotalkWh,
            measuredDemandkW: enteredMeasuredDemandkW,
            totalCost: enteredTotalCost,
            }]
    };

    return  <form onSubmit={submitHandler}>
                <div className='new-bill__controls'>
                    <div className='new-bill__control'>
                        {/* Will need to refactor to a dropdown component based on availability utilities for an organization */}
                        <label>Utility</label>
                        <input type='text' value={enteredUtility} onChange={utilityChangeHandler} />
                    </div>
                    <div className='new-bill__control'>
                        {/* Will need to refactor to a dropdown component for an organizations account codes */}
                        <label>Account Number</label>
                        <input type='text' value={enteredAccountNumber} onChange={accountNumberChangeHandler} />
                    </div>
                    <div className='new-bill__control'>
                        <label>Meter Number</label>
                        <input type='text' value={enteredMeterNumber} onChange={meterNumberChangeHandler} />
                    </div>
                    <div className='new-bill__control'>
                        <label>Rate Schedule</label>
                        <input type='text' value={enteredRateSchedule} onChange={rateScheduleChangeHandler} />
                    </div>
                    <div className='new-bill__control'>
                        <label>Date Start</label>
                        <input type='date' value={enteredStartDate} onChange={startDateChangeHandler} />
                    </div>
                    <div className='new-bill_control'>
                        <label>Date End</label>
                        <input type='date' value={enteredEndDate} onChange={endDateChangeHandler} />
                    </div>
                    <div>
                        <label>Billable Usage</label>
                        <div>
                            <labe>Total Use (kWh)</labe>
                            <input type='text' value={enteredBillableTotalkWh} onChange={billableTotalkWhChangeHandler} />
                        </div>
                        <div>
                            <label>Billable Demand (kW)</label>
                            <input type='text' value={enteredBillableDemandkW} onChange={billableDemandkWChangeHandler} />
                        </div>
                    </div>
                    <div className='new-bill_control'>
                        <label>Measured Usage</label>
                        <div>
                            <label>Total Use (kWh)</label>
                            <input type='text' value={enteredMeasuredTotalkWh} onChange={measuredTotalkWhChangeHandler} />
                        </div>
                        <div>
                            <label>Measured Demand (kW)</label>
                            <input type='text' value={enteredMeasuredDemandkW} onChange={measuredDemandkWChangeHandler} />
                        </div>
                    </div>
                    <div>
                        <label>Total Cost</label>

                        <input type='text' value={enteredTotalCost} onChange={totalCostChangeHandler} />
                    </div>

                    {/* <div className='new-bill__control'>
                        <label>Amount</label>
                        <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange ={amountChangeHandler}></input>
                    </div>
                    <div className='new-bill__control'>
                        <label>Date</label>
                        <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}></input>
                    </div> */}
                </div> 

                <div className="new-bill__actions">
                    {/* <button type='button' onClick={props.onCancel}>Cancel</button> */}
                    <button type='submit' >Add Expense</button>
                </div>
            </form>
};

export default NewBillForm;