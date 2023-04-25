import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { fileApi } from "../api/fileApi";

const FileTable = ({ files }) => {
  const [fileList, setFileList] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchState, setSearchState] = useState(false);
  useEffect(() => {
    if (files.length > 0) {
      setFileList(files);
    }
  }, [files]);

  const handleSubmit = async () => {
    if (searchState) {
      setSearchState(false);
      setLoading(true);
      setSearch("");
      if (files.length > 0) {
        setFileList(files);
        setLoading(false);
      }
    } else {
      try {
        setSearchState(false);
        setLoading(true);
        await fileApi.post(`/file/data?fileID=${search}`).then((res) => {
          //console.log(res.data);
          setSearchState(true);
          setFileList([res.data]);
          setLoading(false);
        });
      } catch (error) {
        setLoading(false);
      }
    }
  };

  if (fileList.length === 0) return null;
  return (
    <>
      <Row className="align-items-end d-flex flex-row justify-content-start gap-2 ">
        <Col cols={12} sm={4}>
          <Form>
            <Form.Group className="" controlId="exampleForm.ControlInput1">
              <Form.Label>File Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="fileName"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col cols={12} sm={4}>
          <Button
            type="button"
            onClick={() => handleSubmit()}
            className={
              searchState ? "mt-auto btn-secondary" : "mt-auto btn-primary"
            }
          >
            {searchState ? "Limpiar" : "Buscar"}
          </Button>
        </Col>
      </Row>
      {loading ? (
        <Spinner className="mt-2" />
      ) : (
        <Table striped bordered hover className="mt-2" id="file-table">
          <thead>
            <tr>
              <th>File Name</th>
              <th>Text</th>
              <th>Number</th>
              <th>Hex</th>
            </tr>
          </thead>
          <tbody>
            {fileList?.map((file) =>
              file.lines.map((line, index) => (
                <tr key={index}>
                  <td>{file.file}</td>
                  <td>{line.text}</td>
                  <td>{line.number}</td>
                  <td>{line.hex}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default FileTable;
