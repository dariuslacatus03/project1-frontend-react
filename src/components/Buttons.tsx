

export function AddButton() {
    return (
        <button>Add new anime</button>
    )
}

export function UpdateButton() {
    return (
        <button>Update anime</button>
    )
}

export function RemoveButton() {
    return (
        <button>Remove anime</button>
    )
}

export default function Buttons() {
    return (
        <div className="shows-top-buttons">
            <AddButton />
            <UpdateButton />
            <RemoveButton />
        </div>
    )
}