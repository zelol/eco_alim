import React from 'react'
import { Table, Accordion, Header, Segment, Icon, Button } from 'semantic-ui-react';

const TicketsLigneProduit = React.createClass({

  render () {
      return (
        <Table.Body>
        {this.props.lignes && this.props.lignes.map(function (ligne) {
          return (
            <Table.Row key={ ligne.id }>
              <Table.Cell>{ ligne.produit }</Table.Cell>
              <Table.Cell>{ ligne.pu }</Table.Cell>
              <Table.Cell>3 kg</Table.Cell>
              <Table.Cell>75 €</Table.Cell>
            </Table.Row>
          )
        })}
        </Table.Body>
      )
    }
})

export default TicketsLigneProduit
