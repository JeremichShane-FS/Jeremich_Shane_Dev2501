import { useCallback, useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import Avatar from "../components/Avatar";
import FormButton from "../components/buttons/FormButton";
import Card from "../components/cards/Card";
import InputField from "../components/forms/InputField";
import { states } from "../constants/state";
import { AppContext } from "../contexts/AppContext";
import { saveToLocalStorage } from "../utils";

const formFields = [
  "firstName",
  "lastName",
  "email",
  "street",
  "city",
  "state",
  "postcode",
  "username",
  "password",
  "phone",
];

const Settings = () => {
  const { userProfile, setUserProfile, loading, setLoading } = useContext(AppContext);
  const initialFormState = formFields.reduce(
    (acc, field) => ({ ...acc, [field]: userProfile?.[field] || "" }),
    {}
  );
  const [formState, setFormState] = useState(initialFormState);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (userProfile) {
      setLoading(false);
    }
    const updatedFormState = formFields.reduce(
      (acc, field) => ({ ...acc, [field]: userProfile?.[field] || "" }),
      {}
    );

    setFormState(updatedFormState);
  }, [userProfile, setLoading]);

  const handleChange = useCallback(e => {
    setFormState(prevFormState => ({
      ...prevFormState,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      setUserProfile(oldProfile => {
        const updatedProfile = { ...oldProfile, ...formState };
        saveToLocalStorage("userProfile", updatedProfile);
        setIsEditMode(!isEditMode);
        setIsModalOpen(true);
        return updatedProfile;
      });
    },
    [formState, setUserProfile, setIsEditMode, isEditMode, setIsModalOpen]
  );

  const handleEdit = useCallback(() => {
    if (isEditMode) {
      // Exiting edit mode, reset the form state to its initial state
      setFormState(initialFormState);
    }
    setIsEditMode(!isEditMode);
  }, [setIsEditMode, isEditMode, initialFormState, setFormState]);

  const { firstName, lastName, email, street, city, state, postcode, username, password, phone } =
    formState;

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Card className="settings" color="#4b4e6d">
      <h1 className="settings__title">Settings</h1>
      <form className="settings__form" onSubmit={handleSubmit}>
        <div className="settings__form-avatar">
          <Avatar
            border
            className="settings__profile-picture"
            img={userProfile.profile_picture.large}
            alt="Profile"
            width="14.375rem"
            height="14.375rem"
          />
          <InputField
            label="Username:"
            labelClassName="settings__label"
            className={`settings__input ${!isEditMode ? "no-hover" : ""}`}
            type="text"
            name="username"
            value={username}
            disabled={!isEditMode}
            onChange={handleChange}
          />
        </div>
        <div className="settings__form-field">
          <InputField
            label="First Name:"
            labelClassName="settings__label"
            className={`settings__input ${!isEditMode ? "no-hover" : ""}`}
            type="text"
            name="firstName"
            value={firstName}
            disabled={!isEditMode}
            onChange={handleChange}
          />
          <InputField
            label="Last Name:"
            labelClassName="settings__label"
            className={`settings__input ${!isEditMode ? "no-hover" : ""}`}
            type="text"
            name="lastName"
            value={lastName}
            disabled={!isEditMode}
            onChange={handleChange}
          />
        </div>

        <div className="settings__form-field">
          <InputField
            label="Street:"
            labelClassName="settings__label"
            className={`settings__input ${!isEditMode ? "no-hover" : ""}`}
            type="text"
            name="street"
            value={street}
            disabled={!isEditMode}
            onChange={handleChange}
          />
          <InputField
            label="City:"
            labelClassName="settings__label"
            className={`settings__input ${!isEditMode ? "no-hover" : ""}`}
            type="text"
            name="city"
            value={city}
            disabled={!isEditMode}
            onChange={handleChange}
          />
          <label className="settings__label" htmlFor="state">
            State:
          </label>
          <select
            className={`settings__input ${!isEditMode ? "no-hover" : ""}`}
            name="state"
            value={state}
            disabled={!isEditMode}
            onChange={handleChange}>
            <option value="">Select a state</option>
            {states.map(stateName => (
              <option key={stateName} value={stateName}>
                {stateName}
              </option>
            ))}
          </select>
          <InputField
            label="Postcode:"
            labelClassName="settings__label"
            className={`settings__input ${!isEditMode ? "no-hover" : ""}`}
            type="text"
            name="postcode"
            value={postcode}
            disabled={!isEditMode}
            onChange={handleChange}
          />
        </div>

        <div className="settings__form-field">
          <InputField
            label="Email:"
            labelClassName="settings__label"
            className={`settings__input ${!isEditMode ? "no-hover" : ""}`}
            type="email"
            name="email"
            value={email}
            disabled={!isEditMode}
            onChange={handleChange}
          />
          <InputField
            label="Password:"
            labelClassName="settings__label"
            className={`settings__input ${!isEditMode ? "no-hover" : ""}`}
            type="password"
            name="password"
            value={password}
            disabled={!isEditMode}
            onChange={handleChange}
          />
          <InputField
            label="Phone:"
            labelClassName="settings__label"
            className={`settings__input ${!isEditMode ? "no-hover" : ""}`}
            type="tel"
            name="phone"
            value={phone}
            disabled={!isEditMode}
            onChange={handleChange}
          />
        </div>

        <div className="settings__row">
          <FormButton className="settings__button" type="button" onClick={handleEdit}>
            {isEditMode ? "Cancel" : "Edit Profile"}
          </FormButton>
          {isEditMode && (
            <FormButton className="settings__button" type="submit">
              Update
            </FormButton>
          )}
        </div>
      </form>
      <Modal
        isOpen={isModalOpen}
        contentLabel="Profile Updated"
        className="create-post-modal modal"
        overlayClassName="create-post-modal__overlay"
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
        onRequestClose={() => setIsModalOpen(false)}>
        <h2>Profile Updated</h2>
        <FormButton onClick={() => setIsModalOpen(false)}>OK</FormButton>
      </Modal>
    </Card>
  );
};
export default Settings;
