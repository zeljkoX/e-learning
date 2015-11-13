import React from 'react';
import {State, History, Link} from 'react-router';
import {Table, TableHeader, TableBody} from './table';



var data = [];
class Tabela extends React.Component {
 render(){
   return(
   <Table className="table table-hover">
    <TableHeader/>
    <TableBody/>
   </Table>
  )
 }
}

export default Tabela;
