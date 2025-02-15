import React, { useEffect, useState } from 'react';

interface Person {
  name: string;
  address: string;
  email: string;
  birth_date: string;
  joined_date: string;
}

function MyButton({ title }: { title: string }) {
  return <button>{title}</button>;
}

function YourName({ name, age }: { name: string; age: string }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
    </div>
  );
}

export default function TypePract() {
  const [data, setData] = useState<Person[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('./User.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data);
        setData(data);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="I'm a button" />
      <YourName name="Andrei Jan Mendoza" age="23" />
      <div>
        <h2>Data from JSON:</h2>
        {error ? (
          <p>Error: {error}</p>
        ) : (
          data.map((person, index) => (
            <div key={index}>
              <h3>{person.name}</h3>
              <p>{person.address}</p>
              <p>{person.email}</p>
              <p>{person.birth_date}</p>
              <p>{person.joined_date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}