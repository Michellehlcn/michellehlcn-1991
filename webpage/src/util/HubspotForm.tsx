import { useHubspotForm } from 'next-hubspot';

export default function HubspotForm () {
    useHubspotForm({
        portalId: '443423642',
        formId: '9afaa430-e720-42dd-b4bb-10bdf06632c5',
        target: '#hubspot-form-wrapper'
    });

    return (
        <div id="hubspot-form-wrapper" />
    )
}