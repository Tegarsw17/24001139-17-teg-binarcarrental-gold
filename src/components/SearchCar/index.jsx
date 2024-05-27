import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import './style.css'
import RentButton from '../RentButton'
const SearchCar = () => {
  return (
    <div className="search-car-wrapper">
      <div className="search-car">
        <Form>
          <Row className="align-items-end">
            <Col>
              <Form.Group>
                <Form.Label>Nama Mobil</Form.Label>
                <Form.Control
                  className="form-control-custom"
                  placeholder="Ketik nama/tipe mobil"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Label>Kategori</Form.Label>
              <Form.Select className="form-control-custom-select">
                <option className="custom-select-option">
                  Masukan Kapasitas Mobil
                </option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Label>Harga</Form.Label>
              <Form.Select className="form-control-custom-select">
                <option className="custom-select-option">
                  Masukan Sewa perhari
                </option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Label>Status</Form.Label>
              <Form.Select className="form-control-custom-select">
                <option className="custom-select-option">Disewa</option>
              </Form.Select>
            </Col>
            <Col md={1} style={{ width: '12%' }}>
              <button className="search-button">Cari Mobil</button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  )
}

export default SearchCar
