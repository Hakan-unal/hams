import { useState, useEffect } from "react";
import { Row, Col, Select, Form, Button, Card, Space, Table } from 'antd';
import { days, months, horoscope } from "./staticData/data"
import { showNotification } from "./components/general/notification";
import Meta from "antd/es/card/Meta";
import supabase from "../src/supabaseConfig";
import { Auth } from '@supabase/auth-ui-react'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
  },
];


const App = () => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState<any>(horoscope[6])
  const [fishes, setFishes] = useState<any>([])
  const [session, setSession] = useState<any>(null)


  const onFinish = (values: any) => {
    calculator(values.day, values.month)
  };

  const onFinishFailed = (errorInfo: any) => {
    errorInfo.errorFields.map((o: any) => {
      showNotification("error", "Form error", o.errors[0] + " !", null)

    })
  };


  const calculator = (day: number, month: number) => {
    if ((day >= 21 && month === 3) || (day <= 20 && month === 4)) setCurrent(horoscope[1])
    if ((day >= 21 && month === 4) || (day <= 20 && month === 5)) setCurrent(horoscope[2])
    if ((day >= 21 && month === 5) || (day <= 20 && month === 6)) setCurrent(horoscope[3])
    if ((day >= 21 && month === 6) || (day <= 22 && month === 7)) setCurrent(horoscope[4])
    if ((day >= 23 && month === 7) || (day <= 22 && month === 8)) setCurrent(horoscope[5])
    if ((day >= 23 && month === 8) || (day <= 22 && month === 9)) setCurrent(horoscope[6])
    if ((day >= 23 && month === 9) || (day <= 22 && month === 10)) setCurrent(horoscope[7])
    if ((day >= 23 && month === 10) || (day <= 22 && month === 11)) setCurrent(horoscope[8])
    if ((day >= 23 && month === 11) || (day <= 21 && month === 12)) setCurrent(horoscope[9])
    if ((day >= 22 && month === 12) || (day <= 19 && month === 1)) setCurrent(horoscope[10])
    if ((day >= 20 && month === 1) || (day <= 18 && month === 2)) setCurrent(horoscope[11])
    if ((day >= 19 && month === 2) || (day <= 20 && month === 3)) setCurrent(horoscope[0])
  }


  // useEffect(() => {
  //   getCountries();
  // }, []);


  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    console.log(session)
    session && getFishes()
  }, [session])

  const getFishes = async () => {
    const { data } = await supabase.from("fish").select("*");
    setFishes(data);
  }


  return (<Row>
    <Col xs={24} sm={{ span: 8, offset: 8 }}>
      <Table dataSource={fishes} columns={columns} />;


    </Col>

  </Row>
  )
}


export default App;