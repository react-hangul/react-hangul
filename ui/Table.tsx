import './Table.scss';

export const Table = (props:any) => {
	const tableData = props.tableData;
	const actionSelected = (action:any) =>{

	};
	return (
	<>
		<table>
			<thead>
				<tr>
				{tableData['header'].map((item:string, key:number) =>{
					return <th scope="col" key={key}>
						<span>{item}</span>
						<span style={{position:'relative'}}>
							<span className="arrow-up"></span>
							<span className="arrow-down"></span>
						</span>
					</th>
					})
				}
				</tr>
			</thead>
			<tbody>
			{tableData['rows'].map((rows:any, key:number) =>{
				
				return <tr key={key}>
					{rows['data'].map((row:string, keyy:number) =>{
					return <td key={keyy}>{row}</td>
					})}
					<td>
					{rows['actions'].map((action:any, keyyy:number) =>{
						return <a key={keyyy} className="table-actions" onClick={actionSelected}>
							<i >{action['icon']}</i>
						</a>
						})
					}
					</td>
				</tr>
				})
			}
			</tbody>
		</table>
	</>
	);
};