import React from 'react';
import {State, History, Link} from 'react-router';
import { Menu, Mixins, Styles, Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn} from 'material-ui';



var data = [];
class Tabela extends React.Component {
  constructor(props){
		super(props);
		this.state = {
			fixedHeader: true,
			fixedFooter: true,
			stripedRows: false,
			showRowHover: false,
			selectable: true,
			multiSelectable: false,
			enableSelectAll: false,
			deselectOnClickaway: true,
			height: '500px',
		};
	}
  render() {
    return (
			<Table
height={this.state.height}
fixedHeader={this.state.fixedHeader}
fixedFooter={this.state.fixedFooter}
selectable={this.state.selectable}
multiSelectable={this.state.multiSelectable}
onRowSelection={this._onRowSelection}
style={{width: '100%'}}>
<TableHeader enableSelectAll={this.state.enableSelectAll}>

	<TableRow>
		<TableHeaderColumn tooltip='The ID'>ID</TableHeaderColumn>
		<TableHeaderColumn tooltip='The Name'>Name</TableHeaderColumn>
		<TableHeaderColumn tooltip='The Status'>Status</TableHeaderColumn>
	</TableRow>
</TableHeader>
<TableBody
	deselectOnClickaway={this.state.deselectOnClickaway}
	showRowHover={this.state.showRowHover}
	stripedRows={this.state.stripedRows}>
<TableRow selected={true}>
<Link>
		<TableRowColumn>1</TableRowColumn>
		<TableRowColumn>John Smith</TableRowColumn>
		<TableRowColumn>Employed</TableRowColumn>
		</Link>
	</TableRow>
	<TableRow>
		<TableRowColumn>2</TableRowColumn>
		<TableRowColumn>Randal White</TableRowColumn>
		<TableRowColumn>Unemployed</TableRowColumn>
	</TableRow>
	<TableRow selected={true}>
		<TableRowColumn>3</TableRowColumn>
		<TableRowColumn>Stephanie Sanders</TableRowColumn>
		<TableRowColumn>Employed</TableRowColumn>
	</TableRow>
	<TableRow>
		<TableRowColumn>4</TableRowColumn>
		<TableRowColumn>Steve Brown</TableRowColumn>
		<TableRowColumn>Employed</TableRowColumn>
	</TableRow>
	<TableRow>
		<TableRowColumn>5</TableRowColumn>
		<TableRowColumn>Joyce Whitten</TableRowColumn>
		<TableRowColumn>Employed</TableRowColumn>
	</TableRow>
	<TableRow>
		<TableRowColumn>6</TableRowColumn>
		<TableRowColumn>Samuel Roberts</TableRowColumn>
		<TableRowColumn>Unemployed</TableRowColumn>
	</TableRow>
	<TableRow>
		<TableRowColumn>7</TableRowColumn>
		<TableRowColumn>Adam Moore</TableRowColumn>
		<TableRowColumn>Employed</TableRowColumn>
	</TableRow>
</TableBody>
</Table>
    );
  }
}

export default Tabela;
