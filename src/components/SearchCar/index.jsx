import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import './style.css'
import RentButton from '../RentButton'
import { useNavigate } from 'react-router-dom'
const SearchCar = ({ isDisabled = false, onSearch }) => {
  const [isFormFocused, setIsFormFocused] = useState(false)
  const [nameCar, setNameCar] = useState('')
  const [capacityCar, setCapacityCar] = useState('')
  const [priceCar, setPriceCar] = useState('')
  const [statusCar, setStatusCar] = useState('')

  const handleInputName = (event) => {
    setNameCar(event.target.value)
  }
  const handleSelectCapacity = (event) => {
    setCapacityCar(event.target.value)
  }

  const handleSelectPrice = (event) => {
    setPriceCar(event.target.value)
  }

  const handleSelectStatus = (event) => {
    setStatusCar(event.target.value)
  }

  const sendQueryApi = () => {
    onSearch({
      nameCar,
      capacityCar,
      priceCar,
      statusCar,
    })
    setIsFormFocused(false)
  }

  return (
    <div className="search-car-wrapper">
      <div className="search-car">
        <Form
          onFocus={() => setIsFormFocused(true)}
          onBlur={() => setIsFormFocused(false)}
          onSubmit={(e) => {
            e.preventDefault()
            sendQueryApi()
          }}
        >
          <Row className="align-items-end">
            <Col>
              <Form.Group>
                <Form.Label>Nama Mobil</Form.Label>
                <Form.Control
                  disabled={isDisabled}
                  className="form-control-custom"
                  placeholder="Ketik nama/tipe mobil"
                  onChange={handleInputName}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Label>Kategori</Form.Label>
              <Form.Select
                disabled={isDisabled}
                className="form-control-custom-select"
                onChange={handleSelectCapacity}
              >
                <option value={''} className="custom-select-option">
                  Masukan Kapasitas Mobil
                </option>
                <option value={'small'} className="custom-select-option">
                  2 - 4 orang
                </option>
                <option value={'medium'} className="custom-select-option">
                  4 - 6 orang
                </option>
                <option value={'hard'} className="custom-select-option">
                  6 - 8 orang
                </option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Label>Harga</Form.Label>
              <Form.Select
                disabled={isDisabled}
                className="form-control-custom-select"
                onChange={handleSelectPrice}
              >
                <option value={''} className="custom-select-option">
                  Masukan Sewa perhari
                </option>
                <option value={'lt_400'} className="custom-select-option">
                  &lt; Rp 400.000
                </option>
                <option value={'400_600'} className="custom-select-option">
                  Rp 400.000 - Rp 600.000
                </option>
                <option value={'gt_600'} className="custom-select-option">
                  &gt; Rp 600.000
                </option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Label>Status</Form.Label>
              <Form.Select
                disabled={isDisabled}
                className="form-control-custom-select"
                onChange={handleSelectStatus}
              >
                <option value={''} className="custom-select-option">
                  Status
                </option>
                <option value={true} className="custom-select-option">
                  Disewa
                </option>
                <option value={false} className="custom-select-option">
                  Tersedia
                </option>
              </Form.Select>
            </Col>
            <Col
              md={1}
              style={{ width: '12%', display: isDisabled ? 'none' : '' }}
            >
              <button type="submit" className="search-button">
                Cari Mobil
              </button>
            </Col>
          </Row>
        </Form>
      </div>
      <div
        className="black-screen-hover"
        style={{ display: isFormFocused ? 'block' : 'none' }}
      ></div>
    </div>
  )
}

export default SearchCar
