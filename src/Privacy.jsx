import './Privacy.scss';
export default ({ hide }) => {
    return (
        <div className='Privacy' onClick={hide}>
            <div className='Privacy_inner' onClick={(e) => {
                e.stopPropagation()
            }}>
                <div className='Privacy_header'>
                    Xenai Privacy Policy
                </div>
                <div className='Privacy_el'>
                    This Privacy Policy (the "Policy") describes how Xenai ("we", "our", or "us") collects, uses, stores, transfers, and protects information obtained from users (the "User" or "you") through our AI assistant service, Xenai.
                    <br /><br />
                    Please read this Policy carefully before using our service. By using the service, you agree to the terms of this Policy.

                </div>
                <div className='Privacy_header'>
                    1. Information Collection
                </div>
                <div className='Privacy_el'>

                    We may collect and process the following categories of information:
                    <br /><br />

                    - Personal Data: Information that identifies you (e.g., name, email address, phone number, and other contact information) that you provide during registration or while using the service.
                    <br />- Usage Data: Information about how you interact with the service, including log data, IP address, device type, operating system, browser information, and other technical details.
                    <br />- Content: Data that you input or transmit through the service, such as tasks, notes, messages, and transcripts of calls and meetings processed by our AI assistant.
                    <br />- Cookies and Similar Technologies: We may use cookies, web beacons, and other technologies to enhance the functionality of the service, personalize content, and analyze traffic.
                </div>
                <div className='Privacy_header'>
                    2. Use of Information

                </div>
                <div className='Privacy_el'>
                    The information collected is used for:
                    <br /><br />
                    - Providing and optimizing the service, including personalizing features according to users' needs.
                    <br />- Analyzing service usage to improve quality, diagnose technical issues, and optimize performance.
                    <br />- Ensuring the security of the service, preventing fraudulent activities, and protecting our rights.
                    <br />- Communicating with users: sending notifications, updates, marketing materials (with appropriate consent), and responding to inquiries.
                    <br />- Conducting research and development: using anonymized data to improve the AI assistant and develop new features.
                </div>
                <div className='Privacy_header'>
                    3. Sharing and Disclosure of Information
                </div>
                <div className='Privacy_el'>
                    We may share or disclose your information to the following third parties:
                    <br /><br />
                    <br />- Service Providers: Third-party organizations that assist us in providing the service (e.g., hosting, analytics, data processing). Such providers are required to maintain confidentiality and use the data solely for the purpose of providing services to us.
                    <br />- Legal Entities and Government Authorities: In cases required by law, or when presented with a court order or request from government authorities.
                    <br />- Transaction Partners: In the event of a merger, sale, or reorganization of our business, where the transfer of information is made to a third party that agrees to comply with the terms of this Policy.

                </div>
                <div className='Privacy_header'>
                    4. Data Storage and Security
                </div>
                <div className='Privacy_el'>
                    - We implement modern security measures to safeguard your data from unauthorized access, loss, disclosure, or alteration, utilizing encryption technologies and other appropriate safeguards.
                    <br />- Data retention is determined by the purposes for which the information was collected; once that period expires, data will be deleted or anonymized in accordance with applicable legal requirements.
                    <br />- Despite our security measures, no data transmission system over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
                </div>

                <div className='Privacy_header'>
                    5. User Rights
                </div>

                <div className='Privacy_el'>
                    You have the following rights regarding your personal data:
                    <br /><br />
                    <br />- The right to access the data we hold about you.
                    <br />- The right to request correction, updating, or deletion of your data if it is inaccurate or incomplete.
                    <br />- The right to restrict or object to the processing of your data, as well as to withdraw your consent for processing if it was provided voluntarily.
                    <br />- The right to lodge a complaint with supervisory authorities if you believe your rights have been violated.
                    <br /><br />
                    To exercise these rights, please contact us using the contact information provided below.
                </div>
                <div className='Privacy_header'>
                    6. International Data Transfers
                </div>
                <div className='Privacy_el'>
                    If you are located outside the country where our servers are situated, your information may be transferred to and processed in another country. We take all necessary measures to ensure that your data is protected in accordance with applicable data protection laws.
                </div>
                <div className='Privacy_header'>
                    7. Changes to the Privacy Policy
                </div>
                <div className='Privacy_el'>
                    We may update this Policy from time to time. All changes will become effective upon the publication of the updated version on our website. We recommend reviewing the Policy periodically to stay informed of any updates. By continuing to use our service after changes are made, you agree to the revised terms of the Policy.
                </div>
                <div className='Privacy_header'>
                    8. Contact Information
                </div>
                <div className='Privacy_el'>
                    If you have any questions, comments, or requests regarding this Privacy Policy, please contact us using the following details:
                    <br /><br />
                    - Email: info@xenai.org
                </div>
                <div className='Privacy_header'>
                    P.S
                </div>
                <div className='Privacy_el'>
                    By using the Xenai service, you acknowledge that you have read this Privacy Policy and agree to its terms. If you do not agree with the terms of this Policy, please do not use our service.
                    <br /><br />
                    Please note: This document is an example and may require adaptation to the specifics of your service and the legal requirements in your jurisdiction.
                </div>
            </div>
        </div>
    )
}