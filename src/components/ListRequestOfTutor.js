/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Badge, Card, Media, Table, Button } from 'reactstrap';
import '../Request.css';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class ListRequestOfTutor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listRequestToMe: [
        {
          id: '1',
          type: 'contract',
          attributes: {
            course: null,
            subject: 'Toán',
            addr: '155 Lê Hồng Phong',
            schedule: 'T3, T4, T5',
            time: '50',
            status: 'Đang chờ',
            paid: false,
            tutor_id: 1,
            price: 300000,
            student_id: 2,
            created_at: '2019-12-22T11:24:27.731Z',
            updated_at: '2019-12-22T11:24:27.731Z'
          }
        },
        {
          id: '2',
          type: 'contract',
          attributes: {
            course: null,
            subject: 'Toán',
            addr: '155 Lê Hồng Phong',
            schedule: 'T3, T4, T5',
            time: '50',
            status: 'Đang học',
            paid: false,
            tutor_id: 1,
            student_id: 2,
            price: 500000,
            created_at: '2019-12-22T11:25:12.772Z',
            updated_at: '2019-12-22T11:25:12.772Z'
          }
        },
        {
          id: '3',
          type: 'contract',
          attributes: {
            course: '10',
            subject: 'Toán',
            addr: '155 Lê Hồng Phong',
            schedule: 'T3, T4, T5',
            time: '50',
            status: 'Đang khiếu nại',
            paid: false,
            price: 500000,
            tutor_id: 1,
            student_id: 2,
            created_at: '2019-12-22T12:30:37.333Z',
            updated_at: '2019-12-22T12:30:37.333Z'
          }
        },
        {
          id: '4',
          type: 'contract',
          attributes: {
            course: '10',
            subject: 'Lý',
            addr: '300 Lê Hồng Phong',
            schedule: 't3, t4, t5, t7',
            time: '60',
            status: 'Hoàn thành',
            paid: true,
            tutor_id: 1,
            student_id: 3,
            price: 600000,
            created_at: '2019-12-22T13:08:07.921Z',
            updated_at: '2019-12-22T13:08:07.921Z'
          }
        }
      ],
      listRequestToOthers: []
    };
  }

  handleClickDetailRequest(e) {
    const idContract = e.target.id;
    history.push('/detailContract/id:' + idContract);
    window.location.reload();
  }

  componentDidMount() {
    // const userProfile = JSON.parse(localStorage.getItem('user'));
    // let res = true;
    // fetch(
    //   `https://stormy-ridge-33799.herokuapp.com/users/${userProfile.id}/contracts`,
    //   {
    //     method: 'get',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json'
    //     }
    //   }
    // )
    //   .then(response => {
    //     if (response.status !== 200) {
    //       res = false;
    //     }
    //     return response.json();
    //   })
    //   .then(response => {
    //     if (res) {
    //       this.setState({
    //         listRequestFromOthers: response.data
    //       });
    //     }
    //     res = true;
    //   });
  }

  render() {
    const { listRequestToMe } = this.state;
    const mapListRequestToMe = listRequestToMe.map(request => {
      return (
        <tr>
          <td>
            <Badge pill color="success">
              {request.id ? request.id : 'Chưa có'}
            </Badge>
          </td>
          <th scope="row">
            <Media className="align-items-center">
              <a
                className="avatar rounded-circle mr-3"
                // onClick={e => e.preventDefault()}
              >
                <img
                  alt="avatar"
                  src="https://scontent-hkg3-2.xx.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/77054448_2395267320735838_6975058001447092224_o.jpg?_nc_cat=111&_nc_ohc=ymh_DbtN4OoAQmQK7N6pWofiE0KgtgJ3iOOEZ5hBZajEgbBC7vDvB4IOA&_nc_ht=scontent-hkg3-2.xx&oh=58c179d6691c367bf118decdea6e5a29&oe=5EAF7B12"
                />
              </a>
              <Media>
                <span className="mb-0 text-sm">Trương Phạm Nhật Tiến</span>
              </Media>
            </Media>
          </th>
          <td>
            {request.attributes.price ? request.attributes.price : 'Chưa có'}
          </td>

          {request.attributes.status === 'Đang chờ' ? (
            <td>
              <Badge pill color="warning">
                Đang chờ
              </Badge>
            </td>
          ) : null}

          {request.attributes.status === 'Đang học' ? (
            <td>
              <Badge pill color="primary">
                Đang học
              </Badge>
            </td>
          ) : null}

          {request.attributes.status === 'Đang khiếu nại' ? (
            <td>
              <Badge pill color="danger">
                Đang khiếu nại
              </Badge>
            </td>
          ) : null}

          {request.attributes.status === 'Hoàn thành' ? (
            <td>
              <Badge pill color="success">
                Hoàn thành
              </Badge>
            </td>
          ) : null}

          {request.attributes.paid ? (
            <td>
              <Badge pill color="success">
                Đã thanh toán
              </Badge>
            </td>
          ) : (
            <td>
              <Badge pill color="danger">
                Chưa thanh toán
              </Badge>
            </td>
          )}

          <td className="text-right">
            <Button
              id={request.id}
              color="info"
              className="detail-button"
              onClick={e => this.handleClickDetailRequest(e)}
            >
              Chi tiết
            </Button>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <div className="container">
          <div class="container instructors-info ml-5">
            <header class="entry-heading">
              <h2 class="entry-title">Danh sách học sinh yêu cầu</h2>
            </header>
            <Card className="mt-4">
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr className="text-center">
                    <th scope="col">Mã Hợp Đồng</th>
                    <th scope="col">Học sinh</th>
                    <th scope="col">Phí</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Thanh toán</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody className="text-center">{mapListRequestToMe}</tbody>
              </Table>
            </Card>
          </div>
          <div class="container instructors-info ml-5">
            <header class="entry-heading">
              <h2 class="entry-title">Danh sách thuê gia sư</h2>
            </header>

            <Card className="mt-4">
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr className="text-center">
                    <th scope="col">Mã Hợp Đồng</th>
                    <th scope="col">Học sinh</th>
                    <th scope="col">Phí</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Thanh toán</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody className="text-center">{mapListRequestToMe}</tbody>
              </Table>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default ListRequestOfTutor;
