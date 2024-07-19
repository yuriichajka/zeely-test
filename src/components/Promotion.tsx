import { useMemo, useState } from "react";

const Promotion = () => {
  const [isShowFullData, setIsShowFullData] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const data = [
    { title: "Reach", value: "22,124" },
    { title: "Impressions", value: "32,984" },
    { title: "CPM", value: "$23.43" },
    { title: "CTR", value: "2.04%" },
    { title: "Unique link clicks", value: "283" },
    { title: "CPC", value: "$18.48" },
  ];

  const toggleData = useMemo(() => {
    return isShowFullData ? data : data.slice(0, 3);
  }, [data]);

  const handleCheckboxChange = (event: any) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };

  return (
    <div className="wrap-main-content px-0">
      <section className="main-content">
        <div className="promotion">
          <h1 className="page-title">Promotion</h1>

          <div>
            <div className="d-flex">
              <img src="/images/campaing-photo.png" alt="Campaing photo" />
              <div className="main-title">
                <h2>Instagram stories, Kiev</h2>
                <div className="d-flex gap-2">
                  <div className="active">
                    <div className="status" />
                    <div className="text">Active until 29.02.24</div>
                  </div>
                  <div className="email">testsite.zee.am</div>
                </div>
              </div>
            </div>
            <div>
              <div className="results">
                <h2>Results</h2>
                {toggleData.map((item) => (
                  <div className="result-item">
                    <span className="result-label">{item.title}</span>
                    <span className="result-value">{item.value}</span>
                  </div>
                ))}
                <button
                  onClick={() => setIsShowFullData(!isShowFullData)}
                  className="btn btn-toggle"
                >
                  Show {isShowFullData ? "less" : "more"}
                  <img
                    src={
                      isShowFullData
                        ? "/images/arrow-up.svg"
                        : "/images/arrow-down.svg"
                    }
                    alt={`arrow-${isShowFullData ? "up" : "down"}`}
                  />
                </button>
              </div>

              <div className="creatives">
                <h2>Creatives</h2>

                <table>
                  <tr className="header">
                    <th>Reach</th>
                    <th>Impressions</th>
                    <th>Budget</th>
                    <th>Unique clicks</th>
                    <th>Cost per click</th>
                    <th>CPM</th>
                  </tr>

                  <tr className="static-row">
                    <td colSpan={6}>
                      <div className="d-flex static-row-wrapper">
                        <div className="d-flex">
                          <img
                            src="/images/campaing-photo.png"
                            alt="Campaing photo"
                          />
                          <div className="main-title">
                            <h2>Instagram stories, Kiev</h2>
                            <div className="d-flex gap-2">
                              <div className="active">
                                <div className="status" />
                                <div className="text">
                                  Active until 29.02.24
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="toggle-wrapper">
                          <label className="switch">
                            <input
                              type="checkbox"
                              name="checkbox1"
                              checked={checkedItems.checkbox1}
                              onChange={handleCheckboxChange}
                            />
                            <div className="slider"></div>
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="value-row">
                    <td>0</td>
                    <td>0</td>
                    <td>$0.00</td>
                    <td>0</td>
                    <td>$0.00</td>
                    <td>$0.00</td>
                  </tr>
                  <tr className="info-row">
                    <td>Unique viewers</td>
                    <td>Total views</td>
                    <td>Spent</td>
                    <td>Per impression</td>
                    <td>Click cost</td>
                    <td>Cost</td>
                  </tr>

                  <tr className="static-row">
                    <td colSpan={6}>
                      <div className="d-flex static-row-wrapper">
                        <div className="d-flex">
                          <img
                            src="/images/campaing-photo.png"
                            alt="Campaing photo"
                          />
                          <div className="main-title">
                            <h2>Instagram stories, Kiev</h2>
                            <div className="d-flex gap-2">
                              <div className="active">
                                <div className="status" />
                                <div className="text">
                                  Active until 29.02.24
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="toggle-wrapper">
                          <label className="switch">
                            <input
                              type="checkbox"
                              name="checkbox2"
                              checked={checkedItems.checkbox2}
                              onChange={handleCheckboxChange}
                            />
                            <div className="slider"></div>
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="value-row">
                    <td>0</td>
                    <td>0</td>
                    <td>$0.00</td>
                    <td>0</td>
                    <td>$0.00</td>
                    <td>$0.00</td>
                  </tr>
                  <tr className="info-row">
                    <td>Unique viewers</td>
                    <td>Total views</td>
                    <td>Spent</td>
                    <td>Per impression</td>
                    <td>Clicked</td>
                    <td>Clicked</td>
                  </tr>

                  <tr className="static-row">
                    <td colSpan={6}>
                      <div className="d-flex static-row-wrapper">
                        <div className="d-flex">
                          <img
                            src="/images/campaing-photo.png"
                            alt="Campaing photo"
                          />
                          <div className="main-title">
                            <h2>Instagram stories, Kiev</h2>
                            <div className="d-flex gap-2">
                              <div className="active">
                                <div className="status" />
                                <div className="text">
                                  Active until 29.02.24
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="toggle-wrapper">
                          <label className="switch">
                            <input
                              type="checkbox"
                              name="checkbox3"
                              checked={checkedItems.checkbox3}
                              onChange={handleCheckboxChange}
                            />
                            <div className="slider"></div>
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="value-row">
                    <td>0</td>
                    <td>0</td>
                    <td>$0.00</td>
                    <td>0</td>
                    <td>$0.00</td>
                    <td>$0.00</td>
                  </tr>
                  <tr className="info-row">
                    <td>Unique viewers</td>
                    <td>Total views</td>
                    <td>Spent</td>
                    <td>Per impression</td>
                    <td>Clicked</td>
                    <td>Clicked</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Promotion;
