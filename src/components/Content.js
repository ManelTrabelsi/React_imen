import React from 'react'

function Content(props)
{
    return (
        <div className="App">
            أوقات الصلاة
            <h1>أوقات الصلاة</h1>
            <table className="table">
                <tr scope="row">
                    <td>{props.val.Fajr}</td>
                    <td>صلاة الصبح</td>
                </tr>
                <tr scope="row">
                    <td>{props.val.Dhuhr}</td>
                    <td>صلاة الظهر</td>
                </tr>
                <tr scope="row">
                    <td>{props.val.Asr}</td>
                    <td>صلاة العصر</td>
                </tr>
                <tr scope="row">
                    <td>{props.val.Maghrib}</td>
                    <td>صلاة المغرب</td>
                </tr>
                <tr scope="row">
                    <td>{props.val.Isha}</td>
                    <td>صلاة العشاء</td>
                </tr>
            </table>
        </div>
    )
}
export default Content