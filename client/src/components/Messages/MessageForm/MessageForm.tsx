import { ChangeEvent, FC, useState } from 'react';
import { Input, Button } from '../../ui';

interface MessageFormProps {
  onSubmit: (message: string) => void;
}

export const MessageForm: FC<MessageFormProps> = ({ onSubmit }) => {
  const [message, setMessage] = useState<string>('');
  const [sendLoading, setSendLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setSendLoading(true);

    await onSubmit(message);
    setSendLoading(false);
    setMessage('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-4 px-4 pt-4 border-t">
      <Input
        value={message}
        onChange={handleChange}
        widthFull
        placeholder="To write a message..."
      />
      <Button disabled={sendLoading} type="submit">
        Send
      </Button>
    </form>
  );
};
