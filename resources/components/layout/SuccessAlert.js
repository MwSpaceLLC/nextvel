import {XMarkIcon} from "@heroicons/react/24/outline";

export default function SuccessAlert({show = false, onClose, text, }) {

    return !show ? <></> : (
        <div className="absolute z-50 top-5 right-5 rounded bg-green-600">
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div className="pr-16 sm:text-center sm:px-16">
                    <p className="font-medium text-white">{text}</p>
                </div>
                <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex p-2 hover:opacity-50"
                    >
                        <span className="sr-only">Dismiss</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                    </button>
                </div>
            </div>
        </div>
    )
}