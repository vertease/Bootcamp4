import React from 'react';

class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText } = this.props;


		const buildingList = data
		
			.filter(name => {
				return name.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			})
			
			.map(directory => {
				return (
					<tr key={directory.id}>
						
						onClick={
							() => selectedUpdate(directory.id)
						}

						<td>{directory.code} </td>
						<td> {directory.name} </td>

					</tr>
				);
			});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
