<template>
  <!--자산 내역 그래프-->
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-md-6">
        <h5 class="mb-0">자산 내역</h5>
        <p class="mb-0 text-sm">
          수입/지출 내역과 투자 내역을 확인하세요.
        </p>
      </div>
    </div>
    <div class="mt-1 row">
      <div class="col-12">
        <div class="card z-index-2 mt-4">
          <div class="card-header p-3 pt-2">
            <div class="text-center border-radius-xl mt-n4 me-3 float-start"></div>
            <div class="d-block d-md-flex">
              <div class="me-auto">
                <h6 class="mb-0">오늘까지 40만원 벌었어요</h6>
              </div>
              <span class="badge badge-lg badge-dot me-4 d-inline-block text-start">
                <i class="bg-success"></i>
                <span class="text-dark">남은 자산</span>
              </span>
              <span class="badge badge-lg badge-dot me-4 d-inline-block text-start">
                <i class="bg-dark"></i>
                <span class="text-dark">투자 이익</span>
              </span>
            </div>
          </div>
          <div class="p-3 card-body">
            <div class="chart">
              <default-line-chart
                id="line-chart"
                title="Line chart"
                :chart="{
                  labels: [
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                  ],
                  datasets: [
                    {
                      label: '남은 자산',
                      data: [50, 40, 30, 22, 50, 20, 40, 23, 50]
                    },
                    {
                      label: '투자 이익',
                      data: [30, 90, 40, 140, 290, 290, 340, 230, 400]
                    }
                  ]
                }"
              />
            </div>
          </div>
        </div>
      </div>

      <!--수입/지출 상세 내역-->
      <div class="py-4 container-fluid">
        <div class="col-md-6">
          <br /><br />
          <h5 class="mb-0">수입/지출 내역</h5>
          <p class="mb-0 text-sm">
            수입/지출 상세 내역을 확인하세요.
          </p>
        </div>
        <div class="mt-4 row">
          <div class="col-12">
            <div class="card">
              <div class="table-responsive">
                <table id="datatable-basic" class="table table-flush">
                  <thead class="thead-light">
                    <tr>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        분류
                      </th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        날짜
                      </th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        자산
                      </th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        금액
                      </th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        메모
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-sm font-weight-normal">편의점</td>
                      <td class="text-sm font-weight-normal">2024/06/12</td>
                      <td class="text-sm font-weight-normal">토스뱅크</td>
                      <td class="text-sm font-weight-normal">6100</td>
                      <td class="text-sm font-weight-normal">초콜릿</td>
                    </tr>
                    <tr>
                      <td class="text-sm font-weight-normal">의료</td>
                      <td class="text-sm font-weight-normal">2024/06/11</td>
                      <td class="text-sm font-weight-normal">현금</td>
                      <td class="text-sm font-weight-normal">6300</td>
                      <td class="text-sm font-weight-normal">병원</td>
                    </tr>
                    <tr>
                      <td class="text-sm font-weight-normal">쇼핑</td>
                      <td class="text-sm font-weight-normal">2024/06/11</td>
                      <td class="text-sm font-weight-normal">계좌이체</td>
                      <td class="text-sm font-weight-normal">62000</td>
                      <td class="text-sm font-weight-normal">옷</td>
                    </tr>
                    <tr>
                      <td class="text-sm font-weight-normal">편의점</td>
                      <td class="text-sm font-weight-normal">2024/06/10</td>
                      <td class="text-sm font-weight-normal">토스뱅크</td>
                      <td class="text-sm font-weight-normal">2000</td>
                      <td class="text-sm font-weight-normal">간식</td>
                    </tr>
                    <tr>
                      <td class="text-sm font-weight-normal">쇼핑</td>
                      <td class="text-sm font-weight-normal">2024/06/09</td>
                      <td class="text-sm font-weight-normal">계좌이체</td>
                      <td class="text-sm font-weight-normal">33000</td>
                      <td class="text-sm font-weight-normal">아이패드</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--투자 내역-->
  <div class="py-4 container-fluid">
    <div class="col-md-6">
      <h5 class="mb-0">투자 내역</h5>
      <p class="mb-0 text-sm">
        투자 상세 내역을 확인하세요.
      </p>
    </div>
    <div class="mt-4 row">
      <div class="col-12">
        <div class="card">
          <div class="table-responsive">
            <table id="datatable-basic" class="table table-flush">
              <thead class="thead-light">
                <tr>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    거래일자
                  </th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    종목코드
                  </th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    종목명
                  </th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    구분
                  </th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    거래수량
                  </th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    거래단가
                  </th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    거래금액
                  </th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    수익률
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-sm font-weight-normal">2024/06/10</td>
                  <td class="text-sm font-weight-normal">AAPL</td>
                  <td class="text-sm font-weight-normal">애플</td>
                  <td class="text-sm font-weight-normal">현금</td>
                  <td class="text-sm font-weight-normal">1</td>
                  <td class="text-sm font-weight-normal">$207.16</td>
                  <td class="text-sm font-weight-normal">$207.16</td>
                  <td :class="{'text-red': 3.73 > 0, 'text-blue': 3.73 < 0}">
                    3.73
                  </td>
                </tr>
                <tr>
                  <td class="text-sm font-weight-normal">2024/06/09</td>
                  <td class="text-sm font-weight-normal">TSLA</td>
                  <td class="text-sm font-weight-normal">테슬라</td>
                  <td class="text-sm font-weight-normal">현금</td>
                  <td class="text-sm font-weight-normal">1</td>
                  <td class="text-sm font-weight-normal">$170.58</td>
                  <td class="text-sm font-weight-normal">$170.58</td>
                  <td :class="{'text-red': -9.12 > 0, 'text-blue': -9.12 < 0}">
                    -9.12
                  </td>
                </tr>
                <tr>
                  <td class="text-sm font-weight-normal">2024/06/09</td>
                  <td class="text-sm font-weight-normal">NVDA</td>
                  <td class="text-sm font-weight-normal">엔비디아</td>
                  <td class="text-sm font-weight-normal">현금</td>
                  <td class="text-sm font-weight-normal">1</td>
                  <td class="text-sm font-weight-normal">$120.92</td>
                  <td class="text-sm font-weight-normal">$120.92</td>
                  <td :class="{'text-red': 0.13 > 0, 'text-blue': 0.13 < 0}">
                    0.13
                  </td>
                </tr>
                <tr>
                  <td class="text-sm font-weight-normal">2024/06/09</td>
                  <td class="text-sm font-weight-normal">035720</td>
                  <td class="text-sm font-weight-normal">카카오</td>
                  <td class="text-sm font-weight-normal">현금</td>
                  <td class="text-sm font-weight-normal">2</td>
                  <td class="text-sm font-weight-normal">40000</td>
                  <td class="text-sm font-weight-normal">80000</td>
                  <td :class="{'text-red': -10.12 > 0, 'text-blue': -10.12 < 0}">
                    -10.12
                  </td>
                </tr>
                <tr>
                  <td class="text-sm font-weight-normal">2024/06/09</td>
                  <td class="text-sm font-weight-normal">NVDA</td>
                  <td class="text-sm font-weight-normal">엔비디아</td>
                  <td class="text-sm font-weight-normal">현금</td>
                  <td class="text-sm font-weight-normal">1</td>
                  <td class="text-sm font-weight-normal">$120.92</td>
                  <td class="text-sm font-weight-normal">$120.92</td>
                  <td :class="{'text-red': 20.93 > 0, 'text-blue': 20.93 < 0}">
                    20.93
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DefaultLineChart from "@/examples/Charts/DefaultLineChart.vue";

export default {
  name: "Charts",
  components: {
    DefaultLineChart
  }
};
</script>

<style>
.text-red {
  color: red;
}
.text-blue {
  color: blue;
}
</style>
