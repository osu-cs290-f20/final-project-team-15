import React from 'react';
import { Button, Col, Form, Container} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../TOS.css";
import { Next } from 'react-bootstrap/esm/PageItem';
import { Link, BrowserRouter, Route } from "react-router-dom";
import Switch from 'react-bootstrap/esm/Switch';
import Home from "./Home";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import AudioTranscription from '../AudioTranscription.mp4'

class TermsAndConditions extends React.Component {
    constructor() {
        super();
        this.state = {

        };

        // Essentially the requried event listener
        // this.handleAgree = this.handleAgree.bind(this);
        // this.handleDisagree = this.handleDisagree.bind(this);
    };
    
    render(){
        return (
          <div className="TermsStyle">
            <Tabs defaultActiveKey="en" id="tos-tabs">
              <Tab eventKey="en" title="English">
                <header id="TermsHeader">Terms and Conditions</header>
                <div className="ParagraphTOS">
                  <br />
                  <h1 id="TermsTitle">A. TERMS OF SALE</h1>
                  <br />
                  <p className="TOSparagraph">
                    A. TERMS OF SALE B. DATA HARVESTER STORE TERMS AND
                    CONDITIONS
                  </p>
                  <br />
                  <p className="TOSparagraph">
                    THE LEGAL ARGREEMENTS SET OUT BELOW GOVERN YOUR USE OF THE
                    DATA HARVESTER 9000 SERVICES ("SERVICES"). TO AGREE TO THESE
                    TERMS, CLICK "AGREE". IF YOU DO NOT AGREE TO THESE TERMS, DO
                    NOT CLICK "AGREE", AND DO NOT USE THE SERVICES.
                  </p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>PAYMENTS, TAXES, AND REFUND POLICY</strong>
                  </p>
                  <br />
                  <p className="TOSparagraph">
                    You agree that you will pay for all products you purchase
                    through the Services, and that Data Harvester 9000 may
                    charge your payment method for any products purchased and
                    for any additional amounts (including any taxes and late
                    fees, as applicable) that may be accrued by or in connection
                    with your Account. You are responible for the timely manner
                    of payments of all fees and for providing Data Harvester
                    9000 with a valid payment method for payment of all fees.
                    For details of how purchases are billed please visit our
                    website to find more information. Although our services are
                    nice and very helpful in mulitple situations, we are
                    entitled to a fair share of your biweekly income. There was
                    a lot of work put into this website in a span of a few days.
                    Thank you for your cooperation.
                  </p>
                  <p className="TOSparagraph">
                    Your total price will include the price of the product plus
                    any applicable tax; such tax is based on the bill-to address
                    and the tax rate in effect at the time you download the
                    product. All sales and rentals of products are final. Prices
                    for products offered via the Services may change at any
                    time, and the Services do not provide price protection or
                    refunds in the event of a price reduction or promotional
                    offering. If a product becomes unavailable following a
                    transaction but prior to download, your sole remedy is a
                    refund. If technical problems prevent or unreasonably delay
                    delivery of your product, your exclusive and sole remedy is
                    either replacement or refund of the price paid, as
                    determined by Data Harvester 9000.
                  </p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>FAMILY SHARING</strong>
                  </p>
                  <br />
                  <p className="TOSparagraph">
                    Family Sharing allows you to share eligible Data Harvester
                    9000 products with up to six members (including yourself) of
                    a “Family.” Not all products, including In-App Purchases,
                    content that is not available for re-download,
                    subscriptions, and some previously purchased apps, are
                    eligible for Family Sharing. In addition Data Harvester
                    reserves the right to disband a Family in accordance with
                    the “Termination” section of this Agreement.
                  </p>
                  <br />
                  <h1 id="TermsTitle">
                    B. DATA HARVESTER TERMS AND CONDITIONS
                  </h1>
                  <br />
                  <p className="CaptionTOS">
                    <strong>YOUR ACCOUNT</strong>
                  </p>
                  <br />
                  <p className="TOSparagraph">
                    Only persons age 6 years or older can create accounts.
                    Accounts for persons under 6 years old can be created by a
                    parent or legal guardian using the Family Sharing or
                    approved educational institution. Children under the age of
                    majority should review this Agreement with their parent or
                    guardian to ensure that the child and parent or legal
                    guardian understand it. As you register for use, there are a
                    few things you should know before using. WE ARE NOT
                    RESPONSIBLE FOR ANY DAMAGES THAT YOU CAUSE USING THIS
                    FEATURE ON YOUR ACCOUNT. Please do not file any lawsuits
                    against Data Harvester 9000 inc. We have full protection
                    under the jursidication of the United States Government. As
                    you register user of the Data Harvester Service, you may
                    establish an account. Don't reveal your account information
                    to anyone else. You are soley responsible for maintaining
                    the confidentiality and security of your account and for all
                    activities that occur on or through your account, and you
                    agree to immediately notify Data Harvester 9000 inc. of any
                    security breach of your account. Data Harvester inc. shall
                    not be responsible for any losses arising out of the
                    unauthorized use of your account. Please just change your
                    password once in a while and for god's sake don't use
                    "password123".
                  </p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>USAGE RULES</strong>
                  </p>
                  <p className="TOSparagraph">
                    (i) You can grab data from anywhere you'd like.
                    (ii) You can pull a practical prank on your coworkers, family members,
                         and even girlfriend. We encourage it! 
                    (iii) We bet $100 you don't look over the terms and Conditions. 
                    (iv) Nobody ever reads this but free monthly milkshakes for reading it till
                         this point.
                  </p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>DATA CONTENT AND PRIVACY</strong>
                  </p>
                  <br />
                  <p className="TOSparagraph">
                    Here at Data Harvester headquarters, we value data...as long
                    as its not our data being leaked. Our webpage is secured
                    enough to not leak any of our own data. You can try but you
                    will fail. Apple reserves the right to close accounts and
                    request alternative forms of payment if a Gift Certificate,
                    iTunes Card or Code, Content Code, or Allowance is
                    fraudulently obtained or used on the Service. More coperate
                    talk, but if you try to gain access to our data, we will
                    lock you out and we will never ever let you back inside. You
                    will be ban and yes that is the only way we can protect our
                    data. Our company vision is: We sell data but save our own.
                  </p>
                </div>
              </Tab>

              <Tab eventKey="cn" title="Chinese">
                <header id="TermsHeader">条款和条件</header>
                <div className="ParagraphTOS">
                  <br />
                  <h1 id="TermsTitle">A.销售条款</h1>
                  <br />
                  <p className="TOSparagraph">
                    A.销售条款B.数据收集商店的条款和条件
                  </p>
                  <br />
                  <p className="TOSparagraph">
                    在使用DATA HARVESTER
                    9000服务（“服务”）时，下面列出了法律协议。要同意这些条款，请单击“同意”。如果您不同意这些条款，请不要单击“同意”，也不要使用服务。
                  </p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>付款，税收和退款政策</strong>
                  </p>
                  <br />
                  <p className="TOSparagraph">
                    您同意将为通过“服务”购买的所有产品付款，并且Data Harvester
                    9000可能会收取您的付款
                    购买的任何产品和任何其他金额的方法（包括任何税金和滞纳金，如适用）
                    可能由您的帐户产生或与之相关。您有责任及时支付所有费用并提供
                    具有有效付款方式的Data Harvester
                    9000，可用于支付所有费用。有关购买方式的详细信息，请访问我们的网站
                    查找更多信息。尽管我们的服务很好，并且在多人情况下非常有帮助，但我们有资格公平分配您双周收入的一部分。
                    几天之内，该网站做了很多工作。谢谢您的合作。
                  </p>
                  <p className="TOSparagraph">
                    您的总价将包括产品价格加上任何适用的税费；此类税额是根据开单地址和下载产品时有效的税率计算的。
                    产品的所有销售和租赁都是最终的。
                    通过“服务”提供的产品价格可能随时更改，并且在降价或促销产品的情况下，“服务”不提供价格保护或退款。
                    如果在交易之后但在下载之前无法购买产品，则唯一的补救方法是退款。如果技术问题阻止或不合理地延迟了产品交付，则您的
                    唯一和唯一的补救办法是替换或退款（由Data Harvester
                    9000确定）。
                  </p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>家庭共享</strong>
                  </p>
                  <br />
                  <p className="TOSparagraph">
                    家庭共享使您可以与“家庭”的最多六个成员（包括您自己）共享合格的Data
                    Harvester 9000产品。
                    并非所有产品（包括应用内购买），无法重新下载的内容，订阅以及某些以前购买的应用，
                    有资格进行家庭共享。此外，Data
                    Harvester保留根据本协议“终止”部分解散家庭的权利。
                  </p>
                  <br />
                  <h1 id="TermsTitle">B.数据收集器的条款和条件</h1>
                  <br />
                  <p className="CaptionTOS">
                    <strong>您的帐户</strong>
                  </p>
                  <br />
                  <p className="TOSparagraph">
                    只有6岁以上的人才能创建帐户。
                    6岁以下人士的帐户可以由父母或法定人士创建
                    监护人使用家庭共享或认可的教育机构。未成年子女应与他们的孩子一起阅读本协议
                    父母或监护人，以确保孩子和父母或法定监护人能够理解。当您注册使用时，您需要注意一些事项
                    使用前应该知道的。对于您因在帐户上使用此功能而引起的任何损害，我们概不负责。请不要提任何诉讼
                    反对Data Harvester 9000
                    inc。在美国政府的管辖下，我们得到了充分的保护。当您注册用户时
                    使用Data
                    Harvester服务，您可以建立一个帐户。不要向其他人透露您的帐户信息。您负责维护
                    您帐户的机密性和安全性，以及帐户上或通过帐户进行的所有活动的机密性和安全性，并且您同意立即通知数据
                    收割机9000
                    inc。您帐户的任何安全漏洞。数据采集​​器公司对于因使用本产品而引起的任何损失概不负责。
                    未经授权使用您的帐户。请仅偶尔更改一次密码，但是请不要使用“
                    password123”。
                  </p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>使用规则</strong>
                  </p>
                  <p className="TOSparagraph">
                    (i) 您可以从任何地方获取数据 
                    (ii) 您可以对同事，家人甚至女友进行恶作剧。 我们鼓励！ 
                    (iii) 我们押注$ 100，您不要忽略条款和条件。 
                    (iv) 到目前为止，没有人会阅读，但每月免费奶昔阅读。 
                    (v) 中国第一。 
                    (vi) 武汉Shasumga Bruh 
                    (vii) 告密地向CCP致敬，以获取免费的社会信用排行榜积分。 
                    (viii) 顺便说一下，我们为CCP工作 :).
                  </p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>数据内容和隐私</strong>
                  </p>
                  <br />
                  <p className="TOSparagraph">
                    在Data
                    Harvester总部，我们重视数据……只要不泄露我们的数据即可。我们的网页足够安全
                    不会泄漏我们自己的任何数据。您可以尝试，但会失败。苹果保留关闭帐户和请求的权利
                    如果欺诈地获得了礼券，iTunes卡或代码，内容代码或津贴，则可以使用其他付款方式
                    或用于服务。进行更详尽的讨论，但是如果您尝试访问我们的数据，我们将把您拒之门外，我们将永远不会
                    让你回到里面。您将被禁止，是的，这是我们保护数据的唯一方法。我们公司的愿景是：我们出售数据但保存
                    我们自己的。
                  </p>
                </div>
              </Tab>

              <Tab eventKey="braille" title="⠠⠃⠗⠇">
                <header id="TermsHeader">⠠⠞⠻⠍⠎⠀⠯⠀⠠⠉⠕⠝⠙⠊⠞⠊⠕⠝⠎</header>
                <div className="ParagraphTOS">
                  <br />
                  <h1 id="TermsTitle">⠠⠁⠲⠀⠠⠠⠞⠻⠍⠎⠀⠠⠠⠷⠀⠠⠠⠎⠁⠇⠑</h1>
                  <br />
                  <p className="TOSparagraph">
                    ⠠⠁⠲⠀⠠⠠⠞⠻⠍⠎⠀⠠⠠⠷⠀⠠⠠⠎⠁⠇⠑⠀⠠⠃⠲⠀⠠⠠⠙⠁⠞⠁⠀⠠⠠⠓⠜⠧⠑⠌⠻⠀⠠⠠⠌⠕⠗⠑⠀⠠⠠⠞⠻⠍⠎⠀⠠⠠⠯⠀⠠⠠⠉⠕⠝⠙⠊⠞⠊⠕⠝⠎
                  </p>
                  <br />
                  <p className="TOSparagraph">
                    ⠠⠠⠮⠀⠠⠠⠇⠑⠛⠁⠇⠀⠠⠠⠜⠛⠗⠑⠑⠍⠢⠞⠎⠀⠠⠠⠎⠑⠞⠀⠠⠠⠳⠀⠠⠠⠆⠇⠀⠠⠠⠛⠕⠧⠻⠝⠀⠠⠠⠽⠗⠀⠠⠠⠥⠎⠑⠀⠠⠠⠷⠀⠠⠠⠮⠀⠠⠠⠙⠁⠞⠁⠀⠠⠠⠓⠜⠧⠑⠌⠻⠀⠼⠊⠚⠚⠚⠀⠠⠠⠎⠻⠧⠊⠉⠑⠎⠀⠐⠣⠦⠎⠻⠧⠊⠉⠑⠎⠴⠐⠜⠲⠀⠠⠠⠞⠕⠀⠠⠠⠁⠛⠗⠑⠑⠀⠠⠠⠞⠕⠀⠠⠠⠘⠮⠀⠠⠠⠞⠻⠍⠎⠂⠀⠠⠠⠉⠇⠊⠉⠅⠀⠦⠁⠛⠗⠑⠑⠴⠲⠀⠠⠠⠊⠋⠀⠠⠠⠽⠀⠠⠠⠙⠀⠠⠠⠝
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    ⠠⠠⠁⠛⠗⠑⠑⠀⠠⠠⠞⠕⠀⠠⠠⠘⠮⠀⠠⠠⠞⠻⠍⠎⠂⠀⠠⠠⠙⠀⠠⠠⠝⠀⠠⠠⠉⠇⠊⠉⠅⠀⠦⠁⠛⠗⠑⠑⠴⠂⠀⠠⠠⠯⠀⠠⠠⠙⠀⠠⠠⠝⠀⠠⠠⠥⠎⠑⠀⠠⠠⠮⠀⠠⠠⠎⠻⠧⠊⠉⠑⠎⠲
                  </p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>⠠⠠⠏⠁⠽⠍⠢⠞⠎⠂⠀⠠⠠⠞⠁⠭⠑⠎⠂⠀⠠⠠⠯⠀⠠⠠⠗⠑⠋⠥⠝⠙⠀⠠⠠⠏⠕⠇⠊⠉⠽</strong>
                  </p>
                  <br />
                  <p className="TOSparagraph">
                    ⠠⠽⠀⠁⠛⠗⠑⠑⠀⠞⠀⠽⠀⠺⠀⠏⠁⠽⠀⠿⠀⠁⠇⠇⠀⠏⠗⠕⠙⠥⠉⠞⠎⠀⠽⠀⠏⠥⠗⠡⠁⠎⠑⠀⠐⠹⠀⠮⠀⠠⠎⠻⠧⠊⠉⠑⠎⠂⠀⠯⠀⠞⠀⠠⠙⠁⠞⠁⠀⠠⠓⠜⠧⠑⠌⠻⠀⠼⠊⠚⠚⠚⠀⠍⠁⠽⠀⠡⠜⠛⠑⠀⠽⠗⠀⠏⠁⠽⠰⠞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    ⠍⠑⠹⠕⠙⠀⠿⠀⠁⠝⠽⠀⠏⠗⠕⠙⠥⠉⠞⠎⠀⠏⠥⠗⠡⠁⠎⠫⠀⠯⠀⠿⠀⠁⠝⠽⠀⠁⠙⠙⠊⠞⠊⠕⠝⠁⠇⠀⠁⠍⠳⠝⠞⠎⠀⠐⠣⠔⠉⠇⠥⠙⠬⠀⠁⠝⠽⠀⠞⠁⠭⠑⠎⠀⠯⠀⠇⠁⠞⠑⠀⠋⠑⠑⠎⠂⠀⠵⠀⠁⠏⠏⠇⠊⠉⠁⠃⠇⠑⠐⠜⠀⠞⠀
                    ⠀⠍⠁⠽⠀⠆⠀⠁⠒⠗⠥⠫⠀⠃⠽⠀⠕⠗⠀⠔⠀⠉⠕⠝⠝⠑⠉⠰⠝⠀⠾⠀⠽⠗⠀⠠⠁⠉⠉⠨⠞⠲⠀⠠⠽⠀⠜⠑⠀⠗⠑⠎⠏⠕⠝⠊⠃⠇⠑⠀⠿⠀⠮⠀⠐⠞⠇⠽⠀⠍⠁⠝⠝⠻⠀⠷⠀⠏⠁⠽⠍⠢⠞⠎⠀⠷⠀⠁⠇⠇⠀⠋⠑⠑⠎⠀⠯⠀⠿⠀⠏⠗⠕⠧⠊⠙⠬⠀
                    ⠠⠙⠁⠞⠁⠀⠠⠓⠜⠧⠑⠌⠻⠀⠼⠊⠚⠚⠚⠀⠾⠀⠁⠀⠧⠁⠇⠊⠙⠀⠏⠁⠽⠰⠞⠀⠍⠑⠹⠕⠙⠀⠿⠀⠏⠁⠽⠰⠞⠀⠷⠀⠁⠇⠇⠀⠋⠑⠑⠎⠲⠀⠠⠿⠀⠙⠑⠞⠁⠊⠇⠎⠀⠷⠀⠓⠪⠀⠏⠥⠗⠡⠁⠎⠑⠎⠀⠜⠑⠀⠃⠊⠇⠇⠫⠀⠏⠇⠂⠎⠑⠀⠧⠊⠎⠊⠞⠀⠳⠗⠀⠺⠑⠃⠎⠊⠞⠑⠀⠞⠕⠀
                    ⠀⠋⠔⠙⠀⠍⠀⠔⠿⠍⠁⠰⠝⠲⠀⠠⠁⠇⠹⠀⠳⠗⠀⠎⠻⠧⠊⠉⠑⠎⠀⠜⠑⠀⠝⠊⠉⠑⠀⠯⠀⠧⠀⠓⠑⠇⠏⠰⠇⠀⠔⠀⠍⠥⠇⠊⠞⠏⠇⠑⠀⠎⠊⠞⠥⠁⠞⠊⠕⠝⠎⠂⠀⠺⠑⠀⠜⠑⠀⠑⠝⠞⠊⠞⠇⠫⠀⠞⠕⠀⠁⠀⠋⠁⠊⠗⠀⠩⠜⠑⠀⠷⠀⠽⠗⠀⠃⠊⠺⠑⠑⠅⠇⠽⠀⠔⠉⠕⠍⠑⠲⠀
                    ⠠⠐⠮⠀⠴⠀⠁⠀⠇⠕⠞⠀⠷⠀⠐⠺⠀⠏⠥⠞⠀⠔⠞⠕⠀⠹⠀⠺⠑⠃⠎⠊⠞⠑⠀⠔⠀⠁⠀⠎⠏⠁⠝⠀⠷⠀⠁⠀⠋⠑⠺⠀⠐⠙⠎⠲⠀⠠⠹⠁⠝⠅⠀⠽⠀⠿⠀⠽⠗⠀⠉⠕⠕⠏⠻⠁⠰⠝⠲
                  </p>
                  <p className="TOSparagraph">
                    ⠠⠽⠗⠀⠞⠕⠞⠁⠇⠀⠏⠗⠊⠉⠑⠀⠺⠀⠔⠉⠇⠥⠙⠑⠀⠮⠀⠏⠗⠊⠉⠑⠀⠷⠀⠮⠀⠏⠗⠕⠙⠥⠉⠞⠀⠏⠇⠥⠎⠀⠁⠝⠽⠀⠁⠏⠏⠇⠊⠉⠁⠃⠇⠑⠀⠞⠁⠭⠆⠀⠎⠡⠀⠞⠁⠭⠀⠊⠎⠀⠃⠁⠎⠫⠀⠕⠝⠀⠮⠀⠃⠊⠇⠇⠤⠞⠕⠀⠁⠙⠙⠗⠑⠎⠎⠀⠯⠀⠮⠀⠞⠁⠭⠀⠗⠁⠞⠑⠀⠔⠀⠑⠖⠑⠉⠞⠀⠁⠞⠀⠮⠀⠐⠞⠀⠽⠀⠙⠪⠝⠇⠕⠁⠙⠀⠮⠀⠏⠗⠕⠙⠥⠉⠞⠲
                    ⠠⠁⠇⠇⠀⠎⠁⠇⠑⠎⠀⠯⠀⠗⠢⠞⠁⠇⠎⠀⠷⠀⠏⠗⠕⠙⠥⠉⠞⠎⠀⠜⠑⠀⠋⠔⠁⠇⠲
                    ⠠⠏⠗⠊⠉⠑⠎⠀⠿⠀⠏⠗⠕⠙⠥⠉⠞⠎⠀⠷⠋⠻⠫⠀⠧⠊⠁⠀⠮⠀⠠⠎⠻⠧⠊⠉⠑⠎⠀⠍⠁⠽⠀⠡⠁⠝⠛⠑⠀⠁⠞⠀⠁⠝⠽⠀⠐⠞⠂⠀⠯⠀⠮⠀⠠⠎⠻⠧⠊⠉⠑⠎⠀⠙⠀⠝⠀⠏⠗⠕⠧⠊⠙⠑⠀⠏⠗⠊⠉⠑⠀⠏⠗⠕⠞⠑⠉⠰⠝⠀⠕⠗⠀⠗⠑⠋⠥⠝⠙⠎⠀⠔⠀⠮⠀⠑⠧⠑⠝⠞⠀⠷⠀⠁⠀⠏⠗⠊⠉⠑⠀⠗⠫⠥⠉⠰⠝⠀⠕⠗⠀⠏⠗⠕⠍⠕⠞⠊⠕⠝⠁⠇⠀⠷⠋⠻⠬⠲
                    ⠠⠊⠋⠀⠁⠀⠏⠗⠕⠙⠥⠉⠞⠀⠃⠑⠉⠕⠍⠑⠎⠀⠥⠝⠁⠧⠁⠊⠇⠁⠃⠇⠑⠀⠋⠕⠇⠇⠪⠬⠀⠁⠀⠞⠗⠁⠝⠎⠁⠉⠰⠝⠀⠃⠀⠏⠗⠊⠕⠗⠀⠞⠕⠀⠙⠪⠝⠇⠕⠁⠙⠂⠀⠽⠗⠀⠎⠕⠇⠑⠀⠗⠑⠍⠫⠽⠀⠊⠎⠀⠁⠀⠗⠑⠋⠥⠝⠙⠲⠀⠠⠊⠋⠀⠞⠑⠡⠝⠊⠉⠁⠇⠀⠏⠗⠕⠃⠇⠑⠍⠎⠀⠏⠗⠑⠧⠑⠝⠞⠀⠕⠗⠀⠥⠝⠗⠂⠎⠕⠝⠁⠃⠇⠽⠀⠙⠑⠇⠁⠽⠀⠙⠑⠇⠊⠧⠻⠽⠀⠷⠀⠽⠗⠀⠏⠗⠕⠙⠥⠉⠞⠂⠀⠽⠗⠀
                    ⠑⠭⠉⠇⠥⠎⠊⠧⠑⠀⠯⠀⠎⠕⠇⠑⠀⠗⠑⠍⠫⠽⠀⠊⠎⠀⠑⠊⠀⠗⠑⠏⠇⠁⠉⠑⠰⠞⠀⠕⠗⠀⠗⠑⠋⠥⠝⠙⠀⠷⠀⠮⠀⠏⠗⠊⠉⠑⠀⠏⠙⠂⠀⠵⠀⠙⠑⠞⠻⠍⠔⠫⠀⠃⠽⠀⠠⠙⠁⠞⠁⠀⠠⠓⠜⠧⠑⠌⠻⠀⠼⠊⠚⠚⠚⠲
                  </p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>⠠⠠⠋⠁⠍⠊⠇⠽⠀⠠⠠⠩⠜⠬</strong>
                  </p>
                  <br />
                  <p className="TOSparagraph">
                    ⠠⠋⠁⠍⠊⠇⠽⠀⠠⠩⠜⠬⠀⠁⠇⠇⠪⠎⠀⠽⠀⠞⠕⠀⠩⠜⠑⠀⠑⠇⠊⠛⠊⠃⠇⠑⠀⠠⠙⠁⠞⠁⠀⠠⠓⠜⠧⠑⠌⠻
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠼⠊⠚⠚⠚⠀⠏⠗⠕⠙⠥⠉⠞⠎⠀⠾⠀⠥⠏⠀⠞⠕⠀⠎⠊⠭⠀⠍⠑⠍⠃⠻⠎⠀⠐⠣⠔⠉⠇⠥⠙⠬⠀⠽⠗⠋⠐⠜⠀⠷
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠨⠦⠋⠁⠍⠊⠇⠽⠲⠨⠴⠀⠠⠝⠀⠁⠇⠇⠀⠏⠗⠕⠙⠥⠉⠞⠎⠂⠀⠔⠉⠇⠥⠙⠬⠀⠠⠔⠤⠁⠏⠏⠀⠠⠏⠥⠗⠡⠁⠎⠑⠎⠂
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠕⠝⠞⠢⠞⠀⠞⠀⠊⠎⠀⠝⠀⠁⠧⠁⠊⠇⠁⠃⠇⠑⠀⠿⠀⠗⠑⠤⠙⠪⠝⠇⠕⠁⠙⠂
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠎⠥⠃⠎⠉⠗⠊⠏⠞⠊⠕⠝⠎⠂⠀⠯⠀⠐⠎⠀⠏⠗⠑⠧⠊⠳⠎⠇⠽⠀⠏⠥⠗⠡⠁⠎⠫⠀⠁⠏⠏⠎⠂⠀⠜⠑
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⠇⠊⠛⠊⠃⠇⠑⠀⠿⠀⠠⠋⠁⠍⠊⠇⠽⠀⠠⠩⠜⠬⠲⠀⠠⠔⠀⠁⠙⠙⠊⠰⠝⠀⠠⠙⠁⠞⠁⠀⠠⠓⠜⠧⠑⠌⠻
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠗⠑⠎⠻⠧⠑⠎⠀⠮⠀⠐⠗⠀⠞⠕⠀⠙⠊⠎⠃⠯⠀⠁⠀⠠⠋⠁⠍⠊⠇⠽⠀⠔⠀⠁⠒⠕⠗⠙⠨⠑⠀⠾
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠮⠀⠨⠦⠞⠻⠍⠔⠁⠰⠝⠨⠴⠀⠎⠑⠉⠰⠝⠀⠷⠀⠹⠀⠠⠁⠛⠗⠑⠑⠰⠞⠲
                  </p>
                  <br />
                  <h1 id="TermsTitle">
                    ⠠⠃⠲⠀⠠⠠⠙⠁⠞⠁⠀⠠⠠⠓⠜⠧⠑⠌⠻⠀⠠⠠⠞⠻⠍⠎⠀⠠⠠⠯⠀⠠⠠⠉⠕⠝⠙⠊⠞⠊⠕⠝⠎
                  </h1>
                  <br />
                  <p className="CaptionTOS">
                    <strong>⠠⠠⠽⠗⠀⠠⠠⠁⠒⠨⠞</strong>
                  </p>
                  <br />
                  <p className="TOSparagraph">
                  ⠠⠕⠝⠇⠽⠀⠏⠻⠎⠕⠝⠎⠀⠁⠛⠑⠀⠼⠋⠀⠽⠑⠜⠎⠀⠕⠗⠀⠕⠇⠙⠻⠀⠉⠀⠉⠗⠂⠞⠑⠀⠁⠒⠳⠝⠞⠎⠲
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠁⠉⠉⠳⠝⠞⠎⠀⠿⠀⠏⠻⠎⠕⠝⠎⠀⠐⠥⠀⠼⠋⠀⠽⠑⠜⠎⠀⠕⠇⠙⠀⠉⠀⠆⠀⠉⠗⠑⠁⠞⠫⠀⠃⠽⠀⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠏⠜⠢⠞⠀⠕⠗⠀⠇⠑⠛⠁⠇⠀⠛⠥⠜⠙⠊⠁⠝⠀⠥⠎⠬⠀⠮⠀⠠⠋⠁⠍⠊⠇⠽⠀⠠⠩⠜⠬⠀⠕⠗
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠏⠏⠗⠕⠧⠫⠀⠫⠥⠉⠁⠞⠊⠕⠝⠁⠇⠀⠔⠌⠊⠞⠥⠰⠝⠲⠀⠠⠡⠝⠀⠐⠥⠀⠮⠀⠁⠛⠑⠀⠷
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠍⠁⠚⠕⠗⠰⠽⠀⠩⠙⠀⠗⠑⠧⠊⠑⠺⠀⠹⠀⠠⠁⠛⠗⠑⠑⠰⠞⠀⠾⠀⠸⠮⠀⠏⠜⠑⠝⠞⠀⠕⠗
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠥⠜⠙⠊⠁⠝⠀⠞⠕⠀⠑⠝⠎⠥⠗⠑⠀⠞⠀⠮⠀⠡⠀⠯⠀⠏⠜⠑⠝⠞⠀⠕⠗⠀⠇⠑⠛⠁⠇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠥⠜⠙⠊⠁⠝⠀⠐⠥⠌⠯⠀⠭⠲⠀⠠⠵⠀⠽⠀⠗⠑⠛⠊⠌⠻⠀⠿⠀⠥⠎⠑⠂⠀⠐⠮⠀⠜⠑⠀⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⠑⠺⠀⠹⠬⠎⠀⠽⠀⠩⠙⠀⠐⠅⠀⠆⠋⠀⠥⠎⠬⠲⠀⠠⠠⠺⠑⠀⠠⠠⠜⠑⠀⠠⠠⠝
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠠⠗⠑⠎⠏⠕⠝⠎⠊⠃⠇⠑⠀⠠⠠⠿⠀⠠⠠⠁⠝⠽⠀⠠⠠⠙⠁⠍⠁⠛⠑⠎⠀⠠⠠⠞⠀⠠⠠⠽⠀⠠⠠⠉⠁⠥⠎⠑⠀⠠⠠⠥⠎⠬⠀⠠⠠⠹
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠠⠋⠑⠁⠞⠥⠗⠑⠀⠠⠠⠕⠝⠀⠠⠠⠽⠗⠀⠠⠠⠁⠉⠉⠨⠞⠲⠀⠠⠏⠇⠑⠁⠎⠑⠀⠙⠀⠝⠀⠋⠊⠇⠑⠀⠁⠝⠽⠀⠇⠁⠺⠎⠥⠊⠞⠎
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠛⠌⠀⠠⠙⠁⠞⠁⠀⠠⠓⠜⠧⠑⠌⠻⠀⠼⠊⠚⠚⠚⠀⠔⠉⠲⠀⠠⠺⠑⠀⠓⠀⠋⠥⠇⠇⠀⠏⠗⠕⠞⠑⠉⠰⠝
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠥⠀⠮⠀⠚⠥⠗⠎⠊⠙⠊⠉⠁⠰⠝⠀⠷⠀⠮⠀⠠⠥⠝⠊⠞⠫⠀⠠⠌⠁⠞⠑⠎⠀⠠⠛⠕⠧⠻⠝⠰⠞⠲⠀⠠⠵
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠽⠀⠗⠑⠛⠊⠌⠻⠀⠥⠎⠻⠀⠷⠀⠮⠀⠠⠙⠁⠞⠁⠀⠠⠓⠜⠧⠑⠌⠻⠀⠠⠎⠻⠧⠊⠉⠑⠂⠀⠽⠀⠍⠁⠽
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⠌⠁⠃⠇⠊⠩⠀⠁⠝⠀⠁⠉⠉⠨⠞⠲⠀⠠⠙⠕⠝⠄⠞⠀⠗⠑⠧⠑⠁⠇⠀⠽⠗⠀⠁⠉⠉⠨⠞⠀⠔⠿⠍⠁⠰⠝
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠞⠕⠀⠁⠝⠽⠐⠕⠀⠑⠇⠎⠑⠲⠀⠠⠽⠀⠜⠑⠀⠎⠕⠇⠑⠽⠀⠗⠑⠎⠏⠕⠝⠎⠊⠃⠇⠑⠀⠿⠀⠍⠁⠔⠞⠁⠔⠬
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠮⠀⠉⠕⠝⠋⠊⠙⠑⠝⠞⠊⠁⠇⠰⠽⠀⠯⠀⠎⠑⠉⠥⠗⠰⠽⠀⠷⠀⠽⠗⠀⠁⠉⠉⠨⠞⠀⠯⠀⠿⠀⠁⠇⠇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠉⠞⠊⠧⠊⠞⠊⠑⠎⠀⠞⠀⠕⠉⠉⠥⠗⠀⠕⠝⠀⠕⠗⠀⠐⠹⠀⠽⠗⠀⠁⠉⠉⠨⠞⠂⠀⠯⠀⠽
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠛⠗⠑⠑⠀⠞⠕⠀⠊⠍⠍⠇⠽⠀⠝⠕⠞⠊⠋⠽⠀⠠⠙⠁⠞⠁⠀⠠⠓⠜⠧⠑⠌⠻⠀⠼⠊⠚⠚⠚⠀⠔⠉⠲⠀⠷⠀⠁⠝⠽
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠎⠑⠉⠥⠗⠰⠽⠀⠃⠗⠑⠁⠡⠀⠷⠀⠽⠗⠀⠁⠉⠉⠨⠞⠲⠀⠠⠙⠁⠞⠁⠀⠠⠓⠜⠧⠑⠌⠻⠀⠔⠉⠲⠀⠩
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠝⠀⠆⠀⠗⠑⠎⠏⠕⠝⠎⠊⠃⠇⠑⠀⠿⠀⠁⠝⠽⠀⠇⠕⠎⠎⠑⠎⠀⠜⠊⠎⠬⠀⠳⠀⠷⠀⠮
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠥⠝⠁⠥⠹⠕⠗⠊⠵⠫⠀⠥⠎⠑⠀⠷⠀⠽⠗⠀⠁⠉⠉⠨⠞⠲⠀⠠⠏⠇⠑⠁⠎⠑⠀⠚⠀⠡⠁⠝⠛⠑⠀⠽⠗
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠏⠁⠎⠎⠘⠺⠀⠕⠝⠉⠑⠀⠔⠀⠁⠀⠱⠊⠇⠑⠀⠯⠀⠿⠀⠛⠕⠙⠀⠩⠁⠅⠑⠀⠙⠕⠝⠄⠞⠀⠥⠎⠑
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠦⠏⠁⠎⠎⠘⠺⠼⠁⠃⠉⠴⠲
                  </p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>⠠⠠⠥⠎⠁⠛⠑⠀⠠⠠⠗⠥⠇⠑⠎</strong>
                  </p>
                  <p className="TOSparagraph">
                    (i) ⠠⠽⠀⠉⠀⠛⠗⠁⠃⠀⠙⠁⠞⠁⠀⠋⠀⠁⠝⠽⠺⠐⠓⠀⠽⠄⠙⠀⠇⠲⠀
                    (ii) ⠠⠽⠀⠉⠀⠏⠥⠇⠇⠀⠁⠀⠏⠗⠁⠉⠞⠊⠉⠁⠇⠀⠏⠗⠁⠝⠅⠀⠕⠝⠀⠽⠗⠀⠉⠕⠐⠺⠻⠎⠂⠀⠋⠁⠍⠊⠇⠽⠀⠍⠑⠍⠃⠻⠎⠂
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠯⠀⠑⠧⠑⠝⠀⠛⠊⠗⠇⠋⠗⠲⠀⠠⠺⠑⠀⠑⠝⠉⠳⠗⠁⠛⠑⠀⠭⠖⠀
                    (iii) ⠠⠺⠑⠀⠃⠑⠞⠀⠈⠎⠼⠁⠚⠚⠀⠽⠀⠙⠕⠝⠄⠞⠀⠇⠕⠕⠅⠀⠕⠧⠻⠀⠮⠀⠞⠻⠍⠎⠀⠯⠀⠠⠉⠕⠝⠙⠊⠞⠊⠕⠝⠎⠲⠀
                    (iv) ⠠⠝⠕⠃⠕⠙⠽⠀⠐⠑⠀⠗⠂⠙⠎⠀⠹⠀⠃⠀⠋⠗⠑⠑⠀⠍⠕⠝⠹⠇⠽⠀⠍⠊⠇⠅⠩⠁⠅⠑⠎⠀⠿⠀⠗⠑⠁⠙⠬⠀⠭⠀⠞⠊⠇⠇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⠀⠏⠕⠔⠞⠲
                  </p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>⠠⠠⠙⠁⠞⠁⠀⠠⠠⠉⠕⠝⠞⠢⠞⠀⠠⠠⠯⠀⠠⠠⠏⠗⠊⠧⠁⠉⠽</strong>
                  </p>
                  <br />
                  <p className="TOSparagraph">
                    ⠠⠐⠓⠀⠁⠞⠀⠠⠙⠁⠞⠁⠀⠠⠓⠜⠧⠑⠌⠻⠀⠓⠂⠙⠟⠥⠜⠞⠻⠎⠂⠀⠺⠑⠀⠧⠁⠇⠥⠑⠀⠙⠁⠞⠁⠲⠲⠲⠁⠎⠀⠇⠰⠛
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠵⠀⠭⠎⠀⠝⠀⠳⠗⠀⠙⠁⠞⠁⠀⠃⠑⠬⠀⠇⠑⠁⠅⠫⠲⠀⠠⠳⠗⠀⠺⠑⠃⠏⠁⠛⠑⠀⠊⠎⠀⠎⠑⠉⠥⠗⠫
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠢⠀⠞⠕⠀⠝⠀⠇⠑⠁⠅⠀⠁⠝⠽⠀⠷⠀⠳⠗⠀⠪⠝⠀⠙⠁⠞⠁⠲⠀⠠⠽⠀⠉⠀⠞⠗⠽⠀⠃⠀⠽
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠺⠀⠋⠁⠊⠇⠲⠀⠠⠁⠏⠏⠇⠑⠀⠗⠑⠎⠻⠧⠑⠎⠀⠮⠀⠐⠗⠀⠞⠕⠀⠉⠇⠕⠎⠑⠀⠁⠒⠳⠝⠞⠎⠀⠯
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠗⠑⠟⠥⠑⠌⠀⠁⠇⠞⠻⠝⠁⠞⠊⠧⠑⠀⠿⠍⠎⠀⠷⠀⠏⠁⠽⠰⠞⠀⠊⠋⠀⠁⠀⠠⠛⠊⠋⠞⠀⠠⠉⠻⠞⠊⠋⠊⠉⠁⠞⠑⠂
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠊⠞⠥⠝⠑⠎⠀⠠⠉⠜⠙⠀⠕⠗⠀⠠⠉⠕⠙⠑⠂⠀⠠⠉⠕⠝⠞⠢⠞⠀⠠⠉⠕⠙⠑⠂⠀⠕⠗⠀⠠⠁⠇⠇⠪⠨⠑⠀⠊⠎
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⠗⠁⠥⠙⠥⠇⠑⠝⠞⠇⠽⠀⠕⠃⠞⠁⠔⠫⠀⠕⠗⠀⠥⠎⠫⠀⠕⠝⠀⠮⠀⠠⠎⠻⠧⠊⠉⠑⠲⠀⠠⠍⠀⠉⠕⠏⠻⠁⠞⠑
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠞⠁⠇⠅⠂⠀⠃⠀⠊⠋⠀⠽⠀⠞⠗⠽⠀⠞⠕⠀⠛⠁⠔⠀⠁⠉⠉⠑⠎⠎⠀⠞⠕⠀⠳⠗⠀⠙⠁⠞⠁⠂⠀⠺⠑⠀⠺
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠇⠕⠉⠅⠀⠽⠀⠳⠀⠯⠀⠺⠑⠀⠺⠀⠝⠐⠑⠀⠐⠑⠀⠇⠑⠞⠀⠽⠀⠃⠁⠉⠅⠀⠔⠎⠊⠙⠑⠲⠀⠠⠽
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠺⠀⠆⠀⠃⠁⠝⠀⠯⠀⠽⠑⠎⠀⠞⠀⠊⠎⠀⠮⠀⠕⠝⠇⠽⠀⠺⠁⠽⠀⠺⠑⠀⠉⠀⠏⠗⠕⠞⠑⠉⠞⠀⠳⠗
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠁⠞⠁⠲⠀⠠⠳⠗⠀⠉⠕⠍⠏⠁⠝⠽⠀⠧⠊⠨⠝⠀⠊⠎⠒⠀⠠⠺⠑⠀⠎⠑⠇⠇⠀⠙⠁⠞⠁⠀⠃⠀⠎⠁⠧⠑⠀⠳⠗⠀⠪⠝⠲
                  </p>
                </div>
              </Tab>

              <Tab eventKey="rn" title="Russian">
                <header id="TermsHeader">Условия и положения</header>
                <div className="ParagraphTOS">
                  <br />
                  <h1 id="TermsTitle">A. УСЛОВИЯ ПРОДАЖИ</h1>
                  <br />
                  <p className="TOSparagraph">
                    A. УСЛОВИЯ ПРОДАЖИ B. УСЛОВИЯ МАГАЗИНА ХАРВЕСТЕРА ДАННЫХ
                  </p>
                  <br />
                  <p className="TOSparagraph">
                    ИЗЛОЖЕННЫЕ НИЖЕ ПРАВОВЫЕ ДОГОВОРЫ РЕГУЛИРУЮТ ИСПОЛЬЗОВАНИЕ
                    ВАМИ УСЛУГ DATA HARVESTER 9000 («УСЛУГИ»). ЧТОБЫ СОГЛАСИТЬСЯ
                    С ДАННЫМИ УСЛОВИЯМИ, НАЖМИТЕ «СОГЛАСЕН». ЕСЛИ ТЫ НЕ
                    СОГЛАШАЕТЕСЬ С ЭТИМИ УСЛОВИЯМИ, НЕ НАЖИМАЙТЕ «СОГЛАСЕН» И НЕ
                    ИСПОЛЬЗУЙТЕ УСЛУГИ.
                  </p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>ПЛАТЕЖИ, НАЛОГИ И ПОЛИТИКА ВОЗВРАТА</strong>
                  </p>
                  <br />
                  <p className="TOSparagraph">
                    Вы соглашаетесь с тем, что будете платить за все продукты,
                    приобретенные через Услуги, и что Data Harvester 9000 может
                    взимать с вас плату. метод для любых приобретенных продуктов
                    и любых дополнительных сумм (включая любые налоги и пени,
                    если применимо), которые могут накапливаться в вашей Учетной
                    записи или в связи с ней. Вы несете ответственность за
                    своевременную оплату всех сборов и за предоставление Data
                    Harvester 9000 с действующим способом оплаты для оплаты всех
                    сборов. Для получения подробной информации о том, как
                    выставляются счета за покупки, посетите наш веб-сайт по
                    адресу найти дополнительную информацию. Несмотря на то, что
                    наши услуги хороши и очень полезны в различных ситуациях, мы
                    имеем право на справедливую долю вашего двухнедельного
                    дохода. За несколько дней на этом сайте было проделано много
                    работы. Спасибо за ваше сотрудничество.
                  </p>
                  <p className="TOSparagraph">
                    Ваша общая цена будет включать цену продукта плюс применимые
                    налоги; Такой налог зависит от адреса выставления счета и
                    налоговой ставки, действующей на момент загрузки продукта.
                    Все продажи и аренда продукции окончательны. Цены на
                    продукты, предлагаемые через Сервисы, могут измениться в
                    любое время, и Сервисы не обеспечивают ценовую защиту или
                    возмещение в случае снижения цены или рекламного
                    предложения. Если продукт становится недоступным после
                    транзакции, но до загрузки, единственным средством правовой
                    защиты является возмещение. Если технические проблемы
                    препятствуют доставке вашего продукта или необоснованно
                    задерживают его, ваш Исключительное и единственное средство
                    правовой защиты - это замена или возмещение уплаченной цены,
                    как определено Data Harvester 9000.
                  </p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>СЕМЬЯ</strong>
                  </p>
                  <br />
                  <p className="TOSparagraph">
                    Family Sharing позволяет вам делиться соответствующими
                    продуктами Data Harvester 9000 максимум с шестью членами
                    (включая вас) «семьи». Не все продукты, включая покупки в
                    приложениях, контент, недоступный для повторной загрузки,
                    подписки и некоторые ранее приобретенные приложения, имеют
                    право на семейный доступ. Кроме того, Data Harvester
                    оставляет за собой право распустить семью в соответствии с
                    разделом «Прекращение действия» настоящего Соглашения.
                  </p>
                  <br />
                  <h1 id="TermsTitle">
                    B. ПОЛОЖЕНИЯ И УСЛОВИЯ УСТАНОВКИ ДАННЫХ
                  </h1>
                  <br />
                  <p className="CaptionTOS">
                    <strong>ВАШ СЧЕТ</strong>
                  </p>
                  <br />
                  <p className="TOSparagraph"></p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>ПРАВИЛА ИСПОЛЬЗОВАНИЯ</strong>
                  </p>
                  <p className="TOSparagraph">
                  (i) Вы можете получать данные откуда угодно (ii) Вы можете
                    разыграть своих коллег, членов семьи,
                    и даже подруга. Мы поощряем это! (iii) Мы ставим 100 долларов на вас
                    не просматривайте условия. (iv) Никто каждый
                    читает это, но бесплатные ежемесячные молочные коктейли для чтения до
                    эта точка.
                  </p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>СОДЕРЖАНИЕ ДАННЫХ И КОНФИДЕНЦИАЛЬНОСТЬ</strong>
                  </p>
                  <br />
                  <p className="TOSparagraph">
                  Здесь, в штаб-квартире Data Harvester, мы ценим данные ... пока
                    поскольку утечка не наших данных. Наша веб-страница защищена
                    достаточно, чтобы не допустить утечки наших собственных данных. Вы можете попробовать, но вы
                    не удастся. Apple оставляет за собой право закрывать учетные записи и
                    запросить альтернативные формы оплаты, если подарочный сертификат,
                    Карта iTunes или код, код содержимого или пособие
                    получено или использовано обманным путем в Сервисе. Больше сотрудничать
                    говорить, но если вы попытаетесь получить доступ к нашим данным, мы
                    Заблокируйте вас, и мы никогда не позволим вам вернуться внутрь. Вы
                    будет бан, и да, это единственный способ защитить наши
                    данные. Видение нашей компании: мы продаем данные, но сохраняем свои собственные.
                  </p>
                </div>
              </Tab>

              <Tab eventKey="vn" title="Tiếng Việt">
                <header id="TermsHeader">Các điều khoản và điều kiện</header>
                <div className="ParagraphTOS">
                  <br />
                  <h1 id="TermsTitle">A. ĐIỀU KHOẢN BÁN HÀNG</h1>
                  <br />
                  <p className="TOSparagraph">
                    A. ĐIỀU KHOẢN BÁN HÀNG B. ĐIỀU KHOẢN VÀ ĐIỀU KIỆN CỦA CỬA
                    HÀNG THU HOẠCH DỮ LIỆU
                  </p>
                  <br />
                  <p className="TOSparagraph">
                    CÁC BIỆN PHÁP PHÁP LÝ ĐƯỢC ĐẶT RA BÊN DƯỚI ĐÂY CHÍNH PHỦ CHO
                    VIỆC BẠN SỬ DỤNG DỊCH VỤ THU HOẠCH DỮ LIỆU 9000 ("DỊCH VỤ").
                    ĐỂ ĐỒNG Ý VỚI CÁC ĐIỀU KHOẢN NÀY, NHẤP VÀO "ĐỒNG Ý". NẾU BẠN
                    KHÔNG ĐỒNG Ý VỚI CÁC ĐIỀU KHOẢN NÀY, KHÔNG NHẤP VÀO "ĐỒNG
                    Ý", VÀ KHÔNG SỬ DỤNG DỊCH VỤ.
                  </p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>
                      CÁC KHOẢN THANH TOÁN, THUẾ VÀ CHÍNH SÁCH HOÀN LẠI
                    </strong>
                  </p>
                  <br />
                  <p className="TOSparagraph">
                    Bạn đồng ý rằng bạn sẽ thanh toán cho tất cả các sản phẩm
                    bạn mua thông qua Dịch vụ và Data Harvester 9000 có thể tính
                    phí thanh toán của bạn đối với bất kỳ sản phẩm nào đã mua và
                    bất kỳ số tiền bổ sung nào (bao gồm mọi khoản thuế và phí
                    trả chậm, nếu có) có thể được tích lũy bởi hoặc liên quan
                    đến Tài khoản của bạn. Bạn có trách nhiệm về cách thức thanh
                    toán kịp thời tất cả các khoản phí và cung cấp Data
                    Harvester 9000 với phương thức thanh toán hợp lệ để thanh
                    toán mọi khoản phí. Để biết chi tiết về cách thanh toán các
                    giao dịch mua, vui lòng truy cập trang web của chúng tôi để
                    tìm thêm thông tin. Mặc dù dịch vụ của chúng tôi rất tốt và
                    rất hữu ích trong nhiều trường hợp, chúng tôi được hưởng một
                    phần thu nhập hai tuần một cách hợp lý của bạn. Có rất nhiều
                    công việc được đưa vào trang web này trong một khoảng thời
                    gian vài ngày. Cảm ơn bạn đã hợp tác của bạn.
                  </p>
                  <p className="TOSparagraph">
                    Tổng giá của bạn sẽ bao gồm giá của sản phẩm cộng với mọi
                    khoản thuế hiện hành; mức thuế đó dựa trên địa chỉ nhận hóa
                    đơn và thuế suất có hiệu lực tại thời điểm bạn tải xuống sản
                    phẩm. Tất cả việc bán và cho thuê sản phẩm là cuối cùng. Giá
                    cho các sản phẩm được cung cấp qua Dịch vụ có thể thay đổi
                    bất kỳ lúc nào và Dịch vụ không cung cấp biện pháp bảo vệ
                    giá hoặc hoàn lại tiền trong trường hợp giảm giá hoặc khuyến
                    mại. Nếu một sản phẩm không có sẵn sau một giao dịch nhưng
                    trước khi tải xuống, biện pháp khắc phục duy nhất của bạn là
                    hoàn lại tiền. Nếu các vấn đề kỹ thuật ngăn cản hoặc trì
                    hoãn việc phân phối sản phẩm của bạn một cách bất hợp lý,
                    biện pháp khắc phục độc quyền và duy nhất là thay thế hoặc
                    hoàn lại giá đã trả, như được xác định bởi Data Harvester
                    9000.
                  </p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>CHIA SẺ TRONG GIA ĐÌNH</strong>
                  </p>
                  <br />
                  <p className="TOSparagraph">
                    Chia sẻ trong gia đình cho phép bạn chia sẻ Trình thu thập dữ liệu đủ điều kiện
                     9000 sản phẩm với tối đa sáu thành viên (bao gồm cả chính bạn)
                     một gia đình." Không phải tất cả các sản phẩm, bao gồm cả Mua hàng trong ứng dụng,
                     nội dung không có sẵn để tải xuống lại,
                     đăng ký và một số ứng dụng đã mua trước đó,
                     đủ điều kiện để chia sẻ trong gia đình. Ngoài Data Harvester
                     có quyền giải tán một Gia đình theo
                     phần "Chấm dứt" của Thỏa thuận này.
                  </p>
                  <br />
                  <h1 id="TermsTitle">
                    B. ĐIỀU KHOẢN VÀ ĐIỀU KIỆN THU HOẠCH DỮ LIỆU
                  </h1>
                  <br />
                  <p className="CaptionTOS">
                    <strong>TÀI KHOẢN CỦA BẠN</strong>
                  </p>
                  <br />
                  <p className="TOSparagraph">
                    Chỉ những người từ 6 tuổi trở lên mới có thể tạo tài khoản.
                    Tài khoản cho người dưới 6 tuổi có thể được tạo bởi
                    cha mẹ hoặc người giám hộ hợp pháp sử dụng Family Sharing hoặc
                    cơ sở giáo dục đã được phê duyệt. Trẻ em dưới tuổi
                    đa số nên xem lại Thỏa thuận này với cha mẹ của họ hoặc
                    người giám hộ để đảm bảo rằng đứa trẻ và cha mẹ hoặc hợp pháp
                    người giám hộ hiểu nó. Khi bạn đăng ký sử dụng, có một
                    vài điều bạn nên biết trước khi sử dụng. CHÚNG TÔI KHÔNG
                    CHỊU TRÁCH NHIỆM VỀ BẤT KỲ THIỆT HẠI NÀO BẠN GÂY RA KHI SỬ DỤNG
                    TÍNH NĂNG TRÊN TÀI KHOẢN CỦA BẠN. Vui lòng không nộp bất kỳ vụ kiện nào
                    chống lại Data Harvester 9000 inc. Chúng tôi có đầy đủ sự bảo vệ
                    dưới sự quản lý của Chính phủ Hoa Kỳ. Như
                    bạn đăng ký người dùng của Dịch vụ Data Harvester, bạn có thể
                    thiết lập một tài khoản. Không tiết lộ thông tin tài khoản của bạn
                    cho bất kỳ ai khác. Bạn có trách nhiệm duy trì
                    tính bí mật và bảo mật của tài khoản của bạn và cho tất cả
                    các hoạt động xảy ra trên hoặc thông qua tài khoản của bạn và bạn
                    đồng ý thông báo ngay cho Data Harvester 9000 inc. của bất kỳ
                    vi phạm bảo mật của tài khoản của bạn. Data Harvester inc. sẽ
                    không chịu trách nhiệm cho bất kỳ tổn thất nào phát sinh từ
                    sử dụng trái phép tài khoản của bạn. Vui lòng chỉ thay đổi của bạn
                    mật khẩu thỉnh thoảng và cho thần lắc không sử dụng
                    "password123".
                  </p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>USAGE RULES</strong>
                  </p>
                  <p className="TOSparagraph">
                    (i) Bạn có thể lấy dữ liệu từ bất cứ đâu bạn muốn (ii) Bạn có thể
                     kéo đồng nghiệp, thành viên gia đình của bạn,
                     và cả bạn gái. Chúng tôi khuyến khích nó! (iii) Chúng tôi đặt 100 đô la cho bạn
                     đừng xem qua các điều khoản và điều kiện. (iv) Không ai mỗi
                     đọc cuốn sách này nhưng miễn phí hàng tháng để đọc nó cho đến khi
                     điểm này.
                  </p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>NỘI DUNG VÀ QUYỀN RIÊNG TƯ CỦA DỮ LIỆU</strong>
                  </p>
                  <br />
                  <p className="TOSparagraph">
                    Tại trụ sở của Data Harvester, chúng tôi coi trọng dữ liệu ... miễn là
                     vì nó không phải là dữ liệu của chúng tôi bị rò rỉ. Trang web của chúng tôi được bảo mật
                     đủ để không làm rò rỉ bất kỳ dữ liệu nào của chúng tôi. Bạn có thể thử nhưng bạn
                     sẽ thất bại. Apple bảo lưu quyền đóng tài khoản và
                     yêu cầu các hình thức thanh toán thay thế nếu Phiếu quà tặng,
                     Thẻ hoặc Mã iTunes, Mã Nội dung hoặc Phụ cấp là
                     lấy hoặc sử dụng gian lận trên Dịch vụ. Đối phó nhiều hơn
                     nói chuyện, nhưng nếu bạn cố gắng truy cập vào dữ liệu của chúng tôi, chúng tôi sẽ
                     khóa bạn ra ngoài và chúng tôi sẽ không bao giờ để bạn trở lại bên trong. Bạn
                     sẽ bị cấm và vâng, đó là cách duy nhất chúng tôi có thể bảo vệ
                     dữ liệu. Tầm nhìn của công ty chúng tôi là: Chúng tôi bán dữ liệu nhưng lưu dữ liệu của riêng chúng tôi.
                  </p>
                </div>
              </Tab>

              <Tab eventKey="spa" title="Spanish">
                <header id="TermsHeader">Términos y Condiciones</header>
                <div className="ParagraphTOS">
                  <br />
                  <h1 id="TermsTitle">A. TÉRMINOS DE VENTA</h1>
                  <br />
                  <p className="TOSparagraph">
                  A. TÉRMINOS DE VENTA B. TÉRMINOS DE LA TIENDA DEL RECOLECTOR DE DATOS Y
                    CONDICIONES
                  </p>
                  <br />
                  <p className="TOSparagraph">
                  LOS ARREGLOS LEGALES EXPUESTOS A CONTINUACIÓN RIGEN EL USO DE LA
                    SERVICIOS DATA HARVESTER 9000 ("SERVICIOS"). ACEPTAR ESTOS
                    TÉRMINOS, HAGA CLIC EN "ACEPTAR". SI NO ESTÁ DE ACUERDO CON ESTOS TÉRMINOS, HAGA
                    NO HAGA CLIC EN "ACEPTAR", Y NO USE LOS SERVICIOS.
                  </p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>PAGOS, IMPUESTOS Y POLÍTICA DE REEMBOLSO</strong>
                  </p>
                  <br />
                  <p className="TOSparagraph">
                  Usted acepta que pagará por todos los productos que compre
                    a través de los Servicios, y que Data Harvester 9000 puede
                    cargar su método de pago por cualquier producto comprado y
                    por cualquier monto adicional (incluidos los impuestos y
                    tarifas, según corresponda) que puedan ser acumuladas por o en conexión
                    con su cuenta. Eres responsable de la manera oportuna
                    de pagos de todas las tarifas y para proporcionar Data Harvester
                    9000 con un método de pago válido para el pago de todas las tarifas.
                    Para obtener detalles sobre cómo se facturan las compras, visite nuestro
                    sitio web para encontrar más información. Aunque nuestros servicios son
                    agradables y muy útiles en múltiples situaciones, somos
                    tiene derecho a una parte justa de sus ingresos quincenales. Había
                    se ha trabajado mucho en este sitio web en unos pocos días.
                    Gracias por su cooperación.
                  </p>
                  <p className="TOSparagraph">
                  Su precio total incluirá el precio del producto más
                    cualquier impuesto aplicable; dicho impuesto se basa en la dirección de facturación
                    y la tasa impositiva vigente en el momento de descargar el
                    producto. Todas las ventas y alquileres de productos son finales. Precios
                    para los productos ofrecidos a través de los Servicios pueden cambiar en cualquier
                    tiempo, y los Servicios no brindan protección de precios o
                    reembolsos en caso de reducción de precio o promoción
                    ofrecimiento. Si un producto deja de estar disponible después de una
                    transacción pero antes de la descarga, su único recurso es un
                    reembolso. Si los problemas técnicos impiden o retrasan injustificadamente
                    entrega de su producto, su recurso exclusivo y único es
                    ya sea reemplazo o devolución del precio pagado, según
                    determinado por Data Harvester 9000.
                  </p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>COMPARTIR FAMILIA</strong>
                  </p>
                  <br />
                  <p className="TOSparagraph">
                  Family Sharing le permite compartir Data Harvester elegible
                    9000 productos con hasta seis miembros (incluido usted mismo) de
                    una familia." No todos los productos, incluidas las compras en la aplicación,
                    contenido que no está disponible para volver a descargar,
                    las suscripciones y algunas aplicaciones compradas anteriormente son
                    elegible para Compartir en familia. Además Data Harvester
                    se reserva el derecho de disolver una Familia de acuerdo con
                    la sección "Terminación" de este Acuerdo.
                  </p>
                  <br />
                  <h1 id="TermsTitle">
                    B. TÉRMINOS Y CONDICIONES DEL RECOLECTOR DE DATOS
                  </h1>
                  <br />
                  <p className="CaptionTOS">
                    <strong>SU CUENTA</strong>
                  </p>
                  <br />
                  <p className="TOSparagraph">
                  Solo las personas mayores de 6 años pueden crear cuentas.
                    Las cuentas para personas menores de 6 años pueden ser creadas por un
                    padre o tutor legal que utiliza Family Sharing o
                    Institución educativa aprobada. Niños menores de
                    la mayoría debe revisar este Acuerdo con sus padres o
                    tutor para asegurarse de que el niño y el padre o la madre
                    guardián lo entiendo. A medida que se registra para su uso, hay una
                    Algunas cosas que debe saber antes de usar. NO SOMOS
                    RESPONSABLE DE CUALQUIER DAÑO QUE USTED CAUSA UTILIZANDO ESTE
                    FUNCIONA EN SU CUENTA. Por favor, no presente ninguna demanda.
                    contra Data Harvester 9000 inc. Tenemos protección total
                    bajo la jurisdicción del Gobierno de los Estados Unidos. Como
                    se registra como usuario del Servicio de recopilación de datos, puede
                    establecer una cuenta. No revele la información de su cuenta
                    a nadie más. Eres el único responsable de mantener
                    la confidencialidad y seguridad de su cuenta y para todos
                    actividades que ocurren en oa través de su cuenta, y usted
                    acepta notificar inmediatamente a Data Harvester 9000 inc. de cualquier
                    violación de seguridad de su cuenta. Data Harvester inc. deberá
                    no será responsable de las pérdidas derivadas de la
                    uso no autorizado de su cuenta. Por favor, cambie su
                    contraseña de vez en cuando y, por Dios, no uses
                    "contraseña123".
                  </p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>REGLAS DE USO</strong>
                  </p>
                  <p className="TOSparagraph">
                  (i) Puede obtener datos desde cualquier lugar que desee (ii) Puede
                    haga una broma práctica a sus compañeros de trabajo, miembros de la familia,
                    e incluso novia. ¡Lo animamos! (iii) Apostamos $ 100 a ti
                    no revise los términos y condiciones. (iv) Nadie cada
                    lee esto, pero batidos mensuales gratis para leerlo hasta
                    este punto.
                  </p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>CONTENIDO DE DATOS Y PRIVACIDAD</strong>
                  </p>
                  <br />
                  <p className="TOSparagraph">
                  Aquí, en la sede de Data Harvester, valoramos los datos ... siempre que
                    ya que no se filtran nuestros datos. Nuestra página web está protegida
                    lo suficiente como para no filtrar ninguno de nuestros propios datos. Puedes intentarlo pero tu
                    fallará. Apple se reserva el derecho a cerrar cuentas y
                    solicitar formas de pago alternativas si es un certificado de regalo,
                    La tarjeta o el código de iTunes, el código de contenido o la asignación es
                    obtenido o utilizado fraudulentamente en el Servicio. Más coperate
                    hablar, pero si intenta acceder a nuestros datos, lo haremos
                    te encerraré y nunca jamás te dejaremos entrar. usted
                    será prohibido y sí, esa es la única forma en que podemos proteger nuestro
                    datos. La visión de nuestra empresa es: Vendemos datos pero guardamos los nuestros.
                  </p>
                </div>
              </Tab>

              <Tab eventKey="mc" title="-- --- .-. ... . / -.-. --- -.. .">
                <header id="TermsHeader">- . .-. -- ... / .- -. -.. / -.-. --- -. -.. .. - .. --- -. ...</header>
                <div className="ParagraphTOS">
                  <br />
                  <h1 id="TermsTitle">.- .-.-.- / - . .-. -- ... / --- ..-. / ... .- .-.. .</h1>
                  <br />
                  <p className="TOSparagraph">
                    .- .-.-.- / - . .-. -- ... / --- ..-. / ... .- .-.. . / -... .-.-.- / -.. .- - .- / .... 
                    .- .-. ...- . ... - . .-. / ... - --- .-. . / - . .-. -- ... / .- -. -.. / -.-. --- -. 
                    -.. .. - .. --- -. ...
                  </p>
                  <br />
                  <p className="TOSparagraph">
                    - .... . / .-.. . --. .- .-.. / .- .-. --. .-. . . -- . -. - ... / ... . - / --- ..- - /
                    -... . .-.. --- .-- / --. --- ...- . .-. -. / -.-- --- ..- .-. / ..- ... . / --- ..-. / -
                    .... . / -.. .- - .- / .... .- .-. ...- . ... - . .-. / ----. ----- ----- ----- / ... . 
                    .-. ...- .. -.-. . ... / -.--. .-..-. ... . .-. ...- .. -.-. . ... .-..-. -.--.- .-.-.- /
                    - --- / .- --. .-. . . / - --- / - .... . ... . / - . .-. -- ... --..-- / -.-. .-.. .. 
                    -.-. -.- / .-..-. .- --. .-. . . .-..-. .-.-.- / .. ..-. / -.-- --- ..- / -.. --- / -.
                    --- - / .- --. .-. . . / - --- / - .... . ... . / - . .-. -- ... --..-- / -.. --- / -. 
                    --- - / -.-. .-.. .. -.-. -.- / .-..-. .- --. .-. . . .-..-. --..-- / .- -. -.. / -.. ---
                    / -. --- - / ..- ... . / - .... . / ... . .-. ...- .. -.-. . ... .-.-.-
                  </p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>.--. .- -.-- -- . -. - ... --..-- / - .- -..- . ... --..-- / .- -. -.. / .-. . ..-. ..- -. -.. / .--. --- .-.. .. -.-. -.--</strong>
                  </p>
                  <br />
                  <p className="TOSparagraph">
                    -.-- --- ..- / .- --. .-. . . / - .... .- - / -.-- --- ..- / .-- .. .-.. .-.. / .--. .- -.-- / ..-. 
                    --- .-. / .- .-.. .-.. / .--. .-. --- -.. ..- -.-. - ... / -.-- --- ..- / .--. ..- .-. -.-. .... .- 
                    ... . / - .... .-. --- ..- --. .... / - .... . / ... . .-. ...- .. -.-. . ... --..-- / .- -. -.. / - 
                    .... .- - / -.. .- - .- / .... .- .-. ...- . ... - . .-. / ----. ----- ----- ----- / -- .- -.-- / -.-. 
                    .... .- .-. --. . / -.-- --- ..- .-. / .--. .- -.-- -- . -. - / -- . - .... --- -.. / ..-. --- .-. / .- 
                    -. -.-- / .--. .-. --- -.. ..- -.-. - ... / .--. ..- .-. -.-. .... .- ... . -.. / .- -. -.. / ..-. --- 
                    .-. / .- -. -.-- / .- -.. -.. .. - .. --- -. .- .-.. / .- -- --- ..- -. - ... / -.--. .. -. -.-. .-.. 
                    ..- -.. .. -. --. / .- -. -.-- / - .- -..- . ... / .- -. -.. / .-.. .- - . / ..-. . . ... --..-- / .- 
                    ... / .- .--. .--. .-.. .. -.-. .- -... .-.. . -.--.- / - .... .- - / -- .- -.-- / -... . / .- -.-. -.-. 
                    .-. ..- . -.. / -... -.-- / --- .-. / .. -. / -.-. --- -. -. . -.-. - .. --- -. / .-- .. - .... / -.-- 
                    --- ..- .-. / .- -.-. -.-. --- ..- -. - .-.-.- / -.-- --- ..- / .- .-. . / .-. . ... .--. --- -. .. -... 
                    .-.. . / ..-. --- .-. / - .... . / - .. -- . .-.. -.-- / -- .- -. -. . .-. / --- ..-. / .--. .- -.-- -- . 
                    -. - ... / --- ..-. / .- .-.. .-.. / ..-. . . ... / .- -. -.. / ..-. --- .-. / .--. .-. --- ...- .. -.. .. 
                    -. --. / -.. .- - .- / .... .- .-. ...- . ... - . .-. / ----. ----- ----- ----- / .-- .. - .... / .- / ...- 
                    .- .-.. .. -.. / .--. .- -.-- -- . -. - / -- . - .... --- -.. / ..-. --- .-. / .--. .- -.-- -- . -. - / --- 
                    ..-. / .- .-.. .-.. / ..-. . . ... .-.-.- / ..-. --- .-. / -.. . - .- .. .-.. ... / --- ..-. / .... --- .-- / 
                    .--. ..- .-. -.-. .... .- ... . ... / .- .-. . / -... .. .-.. .-.. . -.. / .--. .-.. . .- ... . / ...- .. ... 
                    .. - / --- ..- .-. / .-- . -... ... .. - . / - --- / ..-. .. -. -.. / -- --- .-. . / .. -. ..-. --- .-. -- .- - 
                    .. --- -. .-.-.- / .- .-.. - .... --- ..- --. .... / --- ..- .-. / ... . .-. ...- .. -.-. . ... / .- .-. . / -. 
                    .. -.-. . / .- -. -.. / ...- . .-. -.-- / .... . .-.. .--. ..-. ..- .-.. / .. -. / -- ..- .-.. .. - .--. .-.. . / 
                    ... .. - ..- .- - .. --- -. ... --..-- / .-- . / .- .-. . / . -. - .. - .-.. . -.. / - --- / .- / ..-. .- .. .-. / 
                    ... .... .- .-. . / --- ..-. / -.-- --- ..- .-. / -... .. .-- . . -.- .-.. -.-- / .. -. -.-. --- -- . .-.-.- / - 
                    .... . .-. . / .-- .- ... / .- / .-.. --- - / --- ..-. / .-- --- .-. -.- / .--. ..- - / .. -. - --- / - .... .. ...
                    / .-- . -... ... .. - . / .. -. / .- / ... .--. .- -. / --- ..-. / .- / ..-. . .-- / -.. .- -.-- ... .-.-.- / - 
                    .... .- -. -.- / -.-- --- ..- / ..-. --- .-. / -.-- --- ..- .-. / -.-. --- --- .--. . .-. .- - .. --- -. .-.-.-
                  </p>
                  <p className="TOSparagraph">
                    -.-- --- ..- .-. / - --- - .- .-.. / .--. .-. .. -.-. . / .-- .. .-.. .-.. / .. -. -.-. .-.. ..- -.. . / - 
                    .... . / .--. .-. .. -.-. . / --- ..-. / - .... . / .--. .-. --- -.. ..- -.-. - / .--. .-.. ..- ... / .- -. 
                    -.-- / .- .--. .--. .-.. .. -.-. .- -... .-.. . / - .- -..- / ... ..- -.-. .... / - .- -..- / .. ... / -... 
                    .- ... . -.. / --- -. / - .... . / -... .. .-.. .-.. -....- - --- / .- -.. -.. .-. . ... ... / .- -. -.. / - 
                    .... . / - .- -..- / .-. .- - . / .. -. / . ..-. ..-. . -.-. - / .- - / - .... . / - .. -- . / -.-- --- ..- / 
                    -.. --- .-- -. .-.. --- .- -.. / - .... . / .--. .-. --- -.. ..- -.-. - .-.-.- / .- .-.. .-.. / ... .- .-.. . 
                    ... / .- -. -.. / .-. . -. - .- .-.. ... / --- ..-. / .--. .-. --- -.. ..- -.-. - ... / .- .-. . / ..-. .. -. 
                    .- .-.. .-.-.- / .--. .-. .. -.-. . ... / ..-. --- .-. / .--. .-. --- -.. ..- -.-. - ... / --- ..-. ..-. . .-. 
                    . -.. / ...- .. .- / - .... . / ... . .-. ...- .. -.-. . ... / -- .- -.-- / -.-. .... .- -. --. . / .- - / .- -. 
                    -.-- / - .. -- . --..-- / .- -. -.. / - .... . / ... . .-. ...- .. -.-. . ... / -.. --- / -. --- - / .--. .-. --- 
                    ...- .. -.. . / .--. .-. .. -.-. . / .--. .-. --- - . -.-. - .. --- -. / --- .-. / .-. . ..-. ..- -. -.. ... / .. 
                    -. / - .... . / . ...- . -. - / --- ..-. / .- / .--. .-. .. -.-. . / .-. . -.. ..- -.-. - .. --- -. / --- .-. / .--. 
                    .-. --- -- --- - .. --- -. .- .-.. / --- ..-. ..-. . .-. .. -. --. .-.-.- / .. ..-. / .- / .--. .-. --- -.. ..- 
                    -.-. - / -... . -.-. --- -- . ... / ..- -. .- ...- .- .. .-.. .- -... .-.. . / ..-. --- .-.. .-.. --- .-- .. -. 
                    --. / .- / - .-. .- -. ... .- -.-. - .. --- -. / -... ..- - / .--. .-. .. --- .-. / - --- / -.. --- .-- -. .-.. 
                    --- .- -.. --..-- / -.-- --- ..- .-. / ... --- .-.. . / .-. . -- . -.. -.-- / .. ... / .- / .-. . ..-. ..- -. 
                    -.. .-.-.- / .. ..-. / - . -.-. .... -. .. -.-. .- .-.. / .--. .-. --- -... .-.. . -- ... / .--. .-. . ...- . 
                    -. - / --- .-. / ..- -. .-. . .- ... --- -. .- -... .-.. -.-- / -.. . .-.. .- -.-- / -.. . .-.. .. ...- . .-. 
                    -.-- / --- ..-. / -.-- --- ..- .-. / .--. .-. --- -.. ..- -.-. - --..-- / -.-- --- ..- .-. / . -..- -.-. .-.. 
                    ..- ... .. ...- . / .- -. -.. / ... --- .-.. . / .-. . -- . -.. -.-- / .. ... / . .. - .... . .-. / .-. . .--. 
                    .-.. .- -.-. . -- . -. - / --- .-. / .-. . ..-. ..- -. -.. / --- ..-. / - .... . / .--. .-. .. -.-. . / .--. .- 
                    .. -.. --..-- / .- ... / -.. . - . .-. -- .. -. . -.. / -... -.-- / -.. .- - .- / .... .- .-. ...- . ... - . .-. 
                    / ----. ----- ----- ----- .-.-.-
                  </p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>..-. .- -- .. .-.. -.-- / ... .... .- .-. .. -. --.</strong>
                  </p>
                  <br />
                  <p className="TOSparagraph">
                  ..-. .- -- .. .-.. -.-- / ... .... .- .-. .. -. --. / .- .-.. .-.. --- .-- ... / -.-- --- ..- / - --- / ... 
                  .... .- .-. . / . .-.. .. --. .. -... .-.. . / -.. .- - .- / .... .- .-. ...- . ... - . .-. / ----. ----- 
                  ----- ----- / .--. .-. --- -.. ..- -.-. - ... / .-- .. - .... / ..- .--. / - --- / ... .. -..- / -- . -- -... 
                  . .-. ... / -.--. .. -. -.-. .-.. ..- -.. .. -. --. / -.-- --- ..- .-. ... . .-.. ..-. -.--.- / --- ..-. / .- 
                  / ..-. .- -- .. .-.. -.-- .-.-.- / -. --- - / .- .-.. .-.. / .--. .-. --- -.. ..- -.-. - ... --..-- / .. -. -.-.
                  .-.. ..- -.. .. -. --. / .. -. -....- .- .--. .--. / .--. ..- .-. -.-. .... .- ... . ... --..-- / -.-. --- -. 
                  - . -. - / - .... .- - / .. ... / -. --- - / .- ...- .- .. .-.. .- -... .-.. . / ..-. --- .-. / .-. . -....- -.. 
                  --- .-- -. .-.. --- .- -.. --..-- / ... ..- -... ... -.-. .-. .. .--. - .. --- -. ... --..-- / .- -. -.. / ... 
                  --- -- . / .--. .-. . ...- .. --- ..- ... .-.. -.-- / .--. ..- .-. -.-. .... .- ... . -.. / .- .--. .--. ... 
                  --..-- / .- .-. . / . .-.. .. --. .. -... .-.. . / ..-. --- .-. / ..-. .- -- .. .-.. -.-- / ... .... .- .-. .. 
                  -. --. .-.-.- / .. -. / .- -.. -.. .. - .. --- -. / -.. .- - .- / .... .- .-. ...- . ... - . .-. / .-. . ... . 
                  .-. ...- . ... / - .... . / .-. .. --. .... - / - --- / -.. .. ... -... .- -. -.. / .- / ..-. .- -- .. .-.. 
                  -.-- / .. -. / .- -.-. -.-. --- .-. -.. .- -. -.-. . / .-- .. - .... / - .... . / - . .-. -- .. -. .- - .. 
                  --- -. / ... . -.-. - .. --- -. / --- ..-. / - .... .. ... / .- --. .-. . . -- . -. - .-.-.-
                  </p>
                  <br />
                  <h1 id="TermsTitle">
                    -... .-.-.- / -.. .- - .- / .... .- .-. ...- . ... - . .-. / - . .-. -- ... / .- -. -.. / 
                    -.-. --- -. -.. .. - .. --- -. ...
                  </h1>
                  <br />
                  <p className="CaptionTOS">
                    <strong>-.-- --- ..- .-. / .- -.-. -.-. --- ..- -. -</strong>
                  </p>
                  <br />
                  <p className="TOSparagraph">
                    --- -. .-.. -.-- / .--. . .-. ... --- -. ... / .- --. . / -.... / -.-- . .- .-. ... / 
                    --- .-. / --- .-.. -.. . .-. / -.-. .- -. / -.-. .-. . .- - . / .- -.-. -.-. --- ..- 
                    -. - ... .-.-.- / .- -.-. -.-. --- ..- -. - ... / ..-. --- .-. / .--. . .-. ... --- -. 
                    ... / ..- -. -.. . .-. / -.... / -.-- . .- .-. ... / --- .-.. -.. / -.-. .- -. / -... . / 
                    -.-. .-. . .- - . -.. / -... -.-- / .- / .--. .- .-. . -. - / --- .-. / .-.. . --. .- .-.. / 
                    --. ..- .- .-. -.. .. .- -. / ..- ... .. -. --. / - .... . / ..-. .- -- .. .-.. -.-- / ... 
                    .... .- .-. .. -. --. / --- .-. / .- .--. .--. .-. --- ...- . -.. / . -.. ..- -.-. .- - .. 
                    --- -. .- .-.. / .. -. ... - .. - ..- - .. --- -. .-.-.- / -.-. .... .. .-.. -.. .-. . -. / 
                    ..- -. -.. . .-. / - .... . / .- --. . / --- ..-. / -- .- .--- --- .-. .. - -.-- / ... .... 
                    --- ..- .-.. -.. / .-. . ...- .. . .-- / - .... .. ... / .- --. .-. . . -- . -. - / .-- .. - 
                    .... / - .... . .. .-. / .--. .- .-. . -. - / --- .-. / --. ..- .- .-. -.. .. .- -. / - --- / 
                    . -. ... ..- .-. . / - .... .- - / - .... . / -.-. .... .. .-.. -.. / .- -. -.. / .--. .- .-. 
                    . -. - / --- .-. / .-.. . --. .- .-.. / --. ..- .- .-. -.. .. .- -. / ..- -. -.. . .-. ... - 
                    .- -. -.. / .. - .-.-.- / .- ... / -.-- --- ..- / .-. . --. .. ... - . .-. / ..-. --- .-. / 
                    ..- ... . --..-- / - .... . .-. . / .- .-. . / .- / ..-. . .-- / - .... .. -. --. ... / -.-- 
                    --- ..- / ... .... --- ..- .-.. -.. / -.- -. --- .-- / -... . ..-. --- .-. . / ..- ... .. -. 
                    --. .-.-.- / .-- . / .- .-. . / -. --- - / .-. . ... .--. --- -. ... .. -... .-.. . / ..-. --- 
                    .-. / .- -. -.-- / -.. .- -- .- --. . ... / - .... .- - / -.-- --- ..- / -.-. .- ..- ... . / ..- 
                    ... .. -. --. / - .... .. ... / ..-. . .- - ..- .-. . / --- -. / -.-- --- ..- .-. / .- -.-. -.-. 
                    --- ..- -. - .-.-.- / .--. .-.. . .- ... . / -.. --- / -. --- - / ..-. .. .-.. . / .- -. -.-- / 
                    .-.. .- .-- ... ..- .. - ... / .- --. .- .. -. ... - / -.. .- - .- / .... .- .-. ...- . ... - . 
                    .-. / ----. ----- ----- ----- / .. -. -.-. .-.-.- / .-- . / .... .- ...- . / ..-. ..- .-.. .-.. / 
                    .--. .-. --- - . -.-. - .. --- -. / ..- -. -.. . .-. / - .... . / .--- ..- .-. ... .. -.. .. -.-. 
                    .- - .. --- -. / --- ..-. / - .... . / ..- -. .. - . -.. / ... - .- - . ... / --. --- ...- . .-. 
                    -. -- . -. - .-.-.- / .- ... / -.-- --- ..- / .-. . --. .. ... - . .-. / ..- ... . .-. / --- ..-. / 
                    - .... . / -.. .- - .- / .... .- .-. ...- . ... - . .-. / ... . .-. ...- .. -.-. . --..-- / -.-- 
                    --- ..- / -- .- -.-- / . ... - .- -... .-.. .. ... .... / .- -. / .- -.-. -.-. --- ..- -. - .-.-.- / 
                    -.. --- -. .----. - / .-. . ...- . .- .-.. / -.-- --- ..- .-. / .- -.-. -.-. --- ..- -. - / .. -. 
                    ..-. --- .-. -- .- - .. --- -. / - --- / .- -. -.-- --- -. . / . .-.. ... . .-.-.- / -.-- --- ..- / 
                    .- .-. . / ... --- .-.. . -.-- / .-. . ... .--. --- -. ... .. -... .-.. . / ..-. --- .-. / -- .- .. 
                    -. - .- .. -. .. -. --. / - .... . / -.-. --- -. ..-. .. -.. . -. - .. .- .-.. .. - -.-- / .- -. -.. / 
                    ... . -.-. ..- .-. .. - -.-- / --- ..-. / -.-- --- ..- .-. / .- -.-. -.-. --- ..- -. - / .- -. -.. / 
                    ..-. --- .-. / .- .-.. .-.. / .- -.-. - .. ...- .. - .. . ... / - .... .- - / --- -.-. -.-. ..- .-. / 
                    --- -. / --- .-. / - .... .-. --- ..- --. .... / -.-- --- ..- .-. / .- -.-. -.-. --- ..- -. - --..-- / 
                    .- -. -.. / -.-- --- ..- / .- --. .-. . . / - --- / .. -- -- . -.. .. .- - . .-.. -.-- / -. --- - .. 
                    ..-. -.-- / -.. .- - .- / .... .- .-. ...- . ... - . .-. / ----. ----- ----- ----- / .. -. -.-. .-.-.- / 
                    --- ..-. / .- -. -.-- / ... . -.-. ..- .-. .. - -.-- / -... .-. . .- -.-. .... / --- ..-. / -.-- --- ..- 
                    .-. / .- -.-. -.-. --- ..- -. - .-.-.- / -.. .- - .- / .... .- .-. ...- . ... - . .-. / .. -. -.-. .-.-.- / 
                    ... .... .- .-.. .-.. / -. --- - / -... . / .-. . ... .--. --- -. ... .. -... .-.. . / ..-. --- .-. / .- -. 
                    -.-- / .-.. --- ... ... . ... / .- .-. .. ... .. -. --. / --- ..- - / --- ..-. / - .... . / ..- -. .- ..- - 
                    .... --- .-. .. --.. . -.. / ..- ... . / --- ..-. / -.-- --- ..- .-. / .- -.-. -.-. --- ..- -. - .-.-.- / 
                    .--. .-.. . .- ... . / .--- ..- ... - / -.-. .... .- -. --. . / -.-- --- ..- .-. / .--. .- ... ... .-- --- 
                    .-. -.. / --- -. -.-. . / .. -. / .- / .-- .... .. .-.. . / .- -. -.. / ..-. --- .-. / --. --- -.. .----. 
                    ... / ... .- -.- . / -.. --- -. .----. - / ..- ... . / .-..-. .--. .- ... ... .-- --- .-. -.. .---- ..--- 
                    ...-- .-..-. .-.-.-
                  </p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>..- ... .- --. . / .-. ..- .-.. . ...</strong>
                  </p>
                  <p className="TOSparagraph">
                    (i) -.-- --- ..- / -.-. .- -. / --. .-. .- -... / -.. .- - .- / ..-. .-. --- -- / .- -. -.-- .-- .... . .-. 
                        . / -.-- --- ..- .----. -.. / .-.. .. -.- . .-.-.-
                    (ii) -.-- --- ..- / -.-. .- -. / .--. ..- .-.. .-.. / .- / .--. .-. .- -.-. - .. -.-. .- .-.. / .--. .-. .- -. 
                        -.- / --- -. / -.-- --- ..- .-. / -.-. --- .-- --- .-. -.- . .-. ... --..-- / ..-. .- -- .. .-.. -.-- / -- . 
                        -- -... . .-. ... --..-- / .- -. -.. / . ...- . -. / --. .. .-. .-.. ..-. .-. .. . -. -.. .-.-.- / .-- . / . 
                        -. -.-. --- ..- .-. .- --. . / .. - -.-.--
                    (iii) .-- . / -... . - / .---- ----- ----- / -.. --- .-.. .-.. .- .-. ... / -.-- --- ..- / -.. --- -. .----. - / 
                        .-.. --- --- -.- / --- ...- . .-. / - .... . / - . .-. -- ... / .- -. -.. / -.-. --- -. -.. .. - .. --- -. ... .-.-.- 
                    (iv) -. --- -... --- -.. -.-- / . ...- . .-. / .-. . .- -.. ... / - .... .. ... / -... ..- - / ..-. .-. . . / -- --- -. - 
                        .... .-.. -.-- / -- .. .-.. -.- ... .... .- -.- . ... / ..-. --- .-. / .-. . .- -.. .. -. --. / .. - / - 
                        .. .-.. .-.. / - .... .. ... / .--. --- .. -. -
                  </p>
                  <br />
                  <p className="CaptionTOS">
                    <strong>-.. .- - .- / -.-. --- -. - . -. - / .- -. -.. / .--. .-. .. ...- .- -.-. -.--</strong>
                  </p>
                  <br />
                  <p className="TOSparagraph">
                    .... . .-. . / .- - / -.. .- - .- / .... .- .-. ...- . ... - . .-. / .... . .- -.. --.- ..- .- .-. - . .-. 
                    ... --..-- / .-- . / ...- .- .-.. ..- . / -.. .- - .- .-.-.- .-.-.- .-.-.- .- ... / .-.. --- -. --. / .- 
                    ... / .. - ... / -. --- - / --- ..- .-. / -.. .- - .- / -... . .. -. --. / .-.. . .- -.- . -.. .-.-.- / 
                    --- ..- .-. / .-- . -... .--. .- --. . / .. ... / ... . -.-. ..- .-. . -.. / . -. --- ..- --. .... / - 
                    --- / -. --- - / .-.. . .- -.- / .- -. -.-- / --- ..-. / --- ..- .-. / --- .-- -. / -.. .- - .- .-.-.- / 
                    -.-- --- ..- / -.-. .- -. / - .-. -.-- / -... ..- - / -.-- --- ..- / .-- .. .-.. .-.. / ..-. .- .. .-.. 
                    .-.-.- / .- .--. .--. .-.. . / .-. . ... . .-. ...- . ... / - .... . / .-. .. --. .... - / - --- / -.-. 
                    .-.. --- ... . / .- -.-. -.-. --- ..- -. - ... / .- -. -.. / .-. . --.- ..- . ... - / .- .-.. - . .-. -. 
                    .- - .. ...- . / ..-. --- .-. -- ... / --- ..-. / .--. .- -.-- -- . -. - / .. ..-. / .- / --. .. ..-. - / 
                    -.-. . .-. - .. ..-. .. -.-. .- - . --..-- / .. - ..- -. . ... / -.-. .- .-. -.. / --- .-. / -.-. --- -.. . 
                    --..-- / -.-. --- -. - . -. - / -.-. --- -.. . --..-- / --- .-. / .- .-.. .-.. --- .-- .- -. -.-. . / .. 
                    ... / ..-. .-. .- ..- -.. ..- .-.. . -. - .-.. -.-- / --- -... - .- .. -. . -.. / --- .-. / ..- ... . -.. / 
                    --- -. / - .... . / ... . .-. ...- .. -.-. . .-.-.- / -- --- .-. . / -.-. --- .--. . .-. .- - . / - .- 
                    .-.. -.- --..-- / -... ..- - / .. ..-. / -.-- --- ..- / - .-. -.-- / - --- / --. .- .. -. / .- -.-. -.-. . 
                    ... ... / - --- / --- ..- .-. / -.. .- - .- --..-- / .-- . / .-- .. .-.. .-.. / .-.. --- -.-. -.- / -.-- 
                    --- ..- / --- ..- - / .- -. -.. / .-- . / .-- .. .-.. .-.. / -. . ...- . .-. / . ...- . .-. / .-.. . - / 
                    -.-- --- ..- / -... .- -.-. -.- / .. -. ... .. -.. . .-.-.- / -.-- --- ..- / .-- .. .-.. .-.. / -... . / 
                    -... .- -. / .- -. -.. / -.-- . ... / - .... .- - / .. ... / - .... . / --- -. .-.. -.-- / .-- .- -.-- / 
                    .-- . / -.-. .- -. / .--. .-. --- - . -.-. - / --- ..- .-. / -.. .- - .- .-.-.- / --- ..- .-. / -.-. 
                    --- -- .--. .- -. -.-- / ...- .. ... .. --- -. / .. ... ---... / .-- . / ... . .-.. .-.. / -.. .- - .- / 
                    -... ..- - / ... .- ...- . / --- ..- .-. / --- .-- -. .-.-.-
                  </p>
                </div>
              </Tab>

              <Tab eventKey="vid" title="Audio Transcription">
                <video className='videoTag' width="600" height="300" controls="controls">
                  <source src={AudioTranscription} type='video/mp4' />
                </video>
              </Tab>

            </Tabs>

            <Link className="text-link" to="/">
              <Button variant="outline-success" id="TOSbutton">
                Agree to Terms
              </Button>{" "}
              {/* Link to 404 page for disagree */}
            </Link>
            <Link className="text-link" to="/404">
              <Button variant="outline-danger" id="TOSbutton">
                Disagree to Terms
              </Button>{" "}
            </Link>
          </div>
        );
    }
}


export default TermsAndConditions;