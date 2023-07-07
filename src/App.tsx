import { useState } from "react";
import { Row, Col, Progress, Select, Space, DatePicker, Form, Button } from 'antd';
import { showNotification } from "./components/general/notification";
import moment from "moment"

type FormValues = {
  type: string,
  date: string,
}



const App = () => {
  const [value, setValue] = useState<number | null>(null)
  const [form] = Form.useForm();


  const calculator = (values: any) => {
    const today = moment(new Date())
    const duration = moment.duration(today.diff(values.date.$d));
    const hours = duration.asHours().toFixed(2);
    const tempResult = parseInt(hours)
    if (tempResult > 0) {
      const val = tempResult / 24
      const result = val / values.type * 100
      setValue(result)
    }
  }



  const onFinish = (values: FormValues) => {
    calculator(values)

    form.resetFields()
  };

  const onFinishFailed = () => {
    showNotification("error", "Uyarı", "Hop hemşerim nereye formda eksik alanlar var", null)
  };

  return (<Row>
    <Col xs={{ span: 21, offset: 1 }} sm={{ span: 4, offset: 10 }}>
      <Space direction="vertical">
        {value && <Progress type="circle" strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} percent={value} />}

        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="type"
            label="Tür"
            rules={[{ required: true, message: 'Alan boş bırakılamaz' }]}
          >
            <Select
              style={{ width: "100%" }}
              placeholder="Seçiniz"
              options={[
                { value: 30, label: "Bedelli" },
                { value: 180, label: "Kısa" },
                { value: 181, label: "Uzun" },
              ]}
            />
          </Form.Item>
          <Form.Item
            name="date"
            label="Başlangıç Tarihi"
            rules={[{ required: true, message: 'Alan boş bırakılamaz' }]}
          >
            <DatePicker format={"YYYY-MM-DD"} placeholder="Seçiniz" />

          </Form.Item>

          <Form.Item >
            <Button block type="primary" htmlType="submit">
              Hesapla
            </Button>
          </Form.Item>
        </Form>



      </Space>
    </Col>
  </Row>
  )
}


export default App;