import { Steps } from 'antd';
const { Step } = Steps;

interface Iprops {
  stepDataSource?: any;
  currentStep?: any;
}

function StepComponent(props: Iprops) {
  const { stepDataSource, currentStep = 0 } = props;
  return (<>
    <Steps current={currentStep} type="navigation" responsive={false}>
      {stepDataSource && stepDataSource.length && stepDataSource.map((stepData: any) => {
        return <Step subTitle={stepData.subTitle} key={stepData.title} title={stepData.title} description={stepData.description} icon={stepData.icon} status={stepData.status} />
      })}
    </Steps>
    <div className="steps-content">{stepDataSource[currentStep].content}</div>
  </>
  )
}

export default StepComponent;