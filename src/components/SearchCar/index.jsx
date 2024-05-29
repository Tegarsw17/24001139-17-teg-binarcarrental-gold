import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import './style.css'
import RentButton from '../RentButton'
const SearchCar = ({ isDisabled = false }) => {
  return (
    <div className="search-car-wrapper">
      <div className="search-car">
        <Form>
          <Row className="align-items-end">
            <Col>
              <Form.Group>
                <Form.Label>Nama Mobil</Form.Label>
                <Form.Control
                  disabled={isDisabled}
                  className="form-control-custom"
                  placeholder="Ketik nama/tipe mobil"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Label>Kategori</Form.Label>
              <Form.Select
                disabled={isDisabled}
                className="form-control-custom-select"
              >
                <option className="custom-select-option">
                  Masukan Kapasitas Mobil
                </option>
                <option className="custom-select-option">2 - 4 orang</option>
                <option className="custom-select-option">4 - 6 orang</option>
                <option className="custom-select-option">6 - 8 orang</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Label>Harga</Form.Label>
              <Form.Select
                disabled={isDisabled}
                className="form-control-custom-select"
              >
                <option className="custom-select-option">
                  Masukan Sewa perhari
                </option>
                <option className="custom-select-option">
                  &lt; Rp 400.000
                </option>
                <option className="custom-select-option">
                  Rp 400.000 - Rp 600.000
                </option>
                <option className="custom-select-option">
                  &gt; Rp 600.000
                </option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Label>Status</Form.Label>
              <Form.Select
                disabled={isDisabled}
                className="form-control-custom-select"
              >
                <option className="custom-select-option">Disewa</option>
              </Form.Select>
            </Col>
            <Col
              md={1}
              style={{ width: '12%', display: isDisabled ? 'none' : '' }}
            >
              <button className="search-button">Cari Mobil</button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  )
}

export default SearchCar
