import React from 'react'

function MarkSheet(props) {
  let engMarks = Number(props.engMarks);
  let matMarks = Number(props.matMarks);
  let socMarks = Number(props.socMarks);
  let sciMarks = Number(props.sciMarks);
  let telMarks = Number(props.telMarks);
  let hinMarks = Number(props.hinMarks);
  let total = engMarks+matMarks+socMarks+sciMarks+telMarks+hinMarks;
  let perc = (total/600)*100;
  let pass = props.pass;
  return (
    <div>
      <table>
        <caption>{props.MarkSheet}</caption>
        <thead>
          <tr>
          <th>Subject</th>
          <th>Max Marks</th>
          <th>Pass Marks</th>
          <th>Marks Obtsined</th>
          <th>Result</th>
          </tr>
          </thead>
        <tbody>
        <tr>
          <td>English</td>
          <td>100</td>
          <td>35</td>
          <td>{engMarks}</td>
          <td>{engMarks>=35 ? "Pass":"fail"}</td>
          </tr>
          <tr>
          <td>Maths</td>
          <td>100</td>
          <td>35</td>
          <td>{matMarks}</td>
          <td>{matMarks>=35 ? "Pass":"fail"}</td>
          </tr>
          <tr>
          <td>Social</td>
          <td>100</td>
          <td>35</td>
          <td>{socMarks}</td>
          <td>{socMarks>=35 ? "Pass":"fail"}</td>
          </tr>
          <tr>
          <td>Science</td>
          <td>100</td>
          <td>35</td>
          <td>{sciMarks}</td>
          <td>{sciMarks>=35 ? "Pass":"fail"}</td>
          </tr>
          <tr>
          <td>Telugu</td>
          <td>100</td>
          <td>35</td>
          <td>{telMarks}</td>
          <td>{telMarks>=35 ? "Pass":"fail"}</td>
          </tr>
          <tr>
          <td>Hindi</td>
          <td>100</td>
          <td>35</td>
          <td>{hinMarks}</td>
          <td>{hinMarks>=35 ? "Pass":"fail"}</td>
          </tr> 
        </tbody>
        <tfoot>
          <tr ><th colSpan={3}>Total Marks</th>
          {/* <th>600</th>
          <th>210</th> */}
          <th>{total}({perc.toFixed(2)}%)</th>
          <th>{pass}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default MarkSheet



// rfce